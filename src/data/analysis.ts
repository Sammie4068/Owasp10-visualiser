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
