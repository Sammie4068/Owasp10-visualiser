import { controllers } from "chart.js";
import { owaspTen } from "./owasp-ten";

export type Vulnerability = {
  name: string;
  severityScore: number;
  severityLevel: string;
  url: string;
};

export function severityAnalysis(): Vulnerability[] {
  const data = owaspTen.map((item) => {
    const severityScore = parseFloat((Math.random() * 10).toFixed(1));
    let severityLevel = "";

    if (severityScore == 0.0) {
      severityLevel = "information";
    } else if (severityScore >= 0.1 && severityScore <= 3.9) {
      severityLevel = "low";
    } else if (severityScore >= 4.0 && severityScore <= 6.9) {
      severityLevel = "medium";
    } else if (severityScore >= 7.0 && severityScore <= 8.9) {
      severityLevel = "high";
    } else if (severityScore >= 9.0 && severityScore <= 10.0) {
      severityLevel = "critical";
    }

    return {
      name: item.title,
      severityScore,
      severityLevel,
      url: item.url,
    };
  });

  localStorage.setItem("analysis", JSON.stringify(data));

  return data;
}

export function getSeverityNumbers(): Record<string, number> {
  const data = localStorage.getItem("analysis");

  if (!data) {
    return {};
  }

  const severityCount: Record<string, number> = {};

  JSON.parse(data).forEach((item: any) => {
    const level = item.severityLevel.toLowerCase();
    if (severityCount[level]) {
      severityCount[level]++;
    } else {
      severityCount[level] = 1;
    }
  });
  localStorage.setItem("severityCount", JSON.stringify(severityCount));

  return severityCount;
}

export function getTotalMvc() {
  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 10) + 1;
  };
  const mvcTotal: Record<string, number> = {
    model: getRandomNumber(),
    view: getRandomNumber(),
    controllers: getRandomNumber(),
  };
  localStorage.setItem("mvcTotal", JSON.stringify(mvcTotal));
  return mvcTotal;
}

export function getAreaMvc() {
  const data = localStorage.getItem("mvcTotal");
  if (!data) return;
  const mvcTotal = JSON.parse(data);

  const getRandomNumbers = (): number[] => {
    const numbers: number[] = [];

    Object.keys(mvcTotal).forEach((key) => {
      const total = mvcTotal[key];
      const baseValue = parseFloat((total / 10).toFixed(2));

      let remaining = total;

      for (let i = 0; i < 10; i++) {
        numbers.push(baseValue);
        remaining -= baseValue;
      }

      while (remaining > 0) {
        for (let i = 0; i < 10 && remaining > 0; i++) {
          const adjustment = parseFloat((Math.random() * 0.1).toFixed(2)); // Small adjustment
          if (remaining - adjustment >= 0) {
            numbers[i] += adjustment;
            remaining -= adjustment;
          }
        }
      }

      if (remaining !== 0) {
        numbers[10 - 1] += parseFloat(remaining.toFixed(2));
      }
    });

    return numbers;
  };

  const mvcData: Record<string, number[]> = {
    model: getRandomNumbers(),
    view: getRandomNumbers(),
    controller: getRandomNumbers(),
  };

  const risks = [
    "BAA",
    "CF",
    "Inj",
    "ID",
    "SM",
    "VOC",
    "IAF",
    "SDIF",
    "SLMF",
    "SSRF",
  ];

  const chartData = risks.map((risk, index) => ({
    risk: risk,
    model: mvcData.model[index],
    view: mvcData.view[index],
    controller: mvcData.controller[index],
  }));

  localStorage.setItem("chartData", JSON.stringify(chartData));
  return chartData;
}
