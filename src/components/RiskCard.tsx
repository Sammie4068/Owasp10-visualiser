"use client";

import { Badge } from "@/components/ui/badge";
import {
  severityColorVariants,
  lightSeverityColorVariant,
} from "@/data/owasp-ten";
import { useEffect, useState } from "react";

export default function RiskCard() {
  const [analysis, setAnalyzedData] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("analysis");
      setAnalyzedData(data);
    }
  }, []);

  const analyzedData = analysis ? JSON.parse(analysis) : [];

  const sortedAnalysisData = analyzedData.sort(
    (a: any, b: any) => b.severityScore - a.severityScore
  );

  const renderedCards = sortedAnalysisData.map((item: any) => {
    return (
      <div
        key={item.name}
        className={`h-[60px] p-5 rounded-lg border text-card-foreground shadow-sm flex items-center justify-between cursor-pointer transform transition-transform duration-300 hover:shadow-sm hover:shadow-gray-400 ${
          lightSeverityColorVariant[item.severityLevel]
        }`}
      >
        <p className="text-xl font-semibold leading-none tracking-tight">
          {item.name}
        </p>
        <Badge
          className={`w-[100px] text-center py-2 capitalize flex items-center justify-center ${
            severityColorVariants[item.severityLevel]
          }`}
        >
          {item.severityLevel}
        </Badge>
      </div>
    );
  });

  return (
    <div className="w-full md:w-1/2 p-5 flex flex-col gap-2">
      {renderedCards}
    </div>
  );
}
