// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import SeverityCard from "@/components/SeverityCard";
// import { OwaspAreaChart } from "@/components/charts/OwaspAreaChart";
// import { OwaspPieChart } from "@/components/charts/OwaspPieChart";
// import RiskCard from "@/components/RiskCard";
// import SemgrepSeverityCard from "@/components/SemgrepSeverityCard";

// export default function VisualizationPage() {
//   return (
//     <main className="container mx-auto p-4 space-y-5">
//       <section className="flex items-center justify-between">
//         <SemgrepSeverityCard />
//       </section>
//       {/* <section className="flex justify-between">
//         <Tabs defaultValue="areachart" className="space-y-4 w-1/2 h-full">
//           <TabsList>
//             <TabsTrigger value="areachart">Area Chart</TabsTrigger>
//             <TabsTrigger value="severitychart">Severity Chart</TabsTrigger>
//           </TabsList>
//           <TabsContent value="areachart">
//             <OwaspAreaChart />
//           </TabsContent>
//           <TabsContent value="severitychart">
//             <OwaspPieChart />
//           </TabsContent>
//         </Tabs>
//         <RiskCard />
//       </section> */}
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  AlertCircle,
  AlertOctagon,
  ShieldAlert,
  Ban,
} from "lucide-react";
import jsonData from "@/data/j2.json";
import { OwaspAreaChart } from "@/components/charts/OwaspAreaChart";
import { OwaspPieChart } from "@/components/charts/OwaspPieChart";

const vulnerabilityData = jsonData;

export default function VisualizationPage() {
  const [selectedVulnerability, setSelectedVulnerability] = useState<any>(null);

  const severityCounts = vulnerabilityData.vulnerabilities.results.reduce(
    (acc, vuln) => {
      const severity =
        vuln.extra.severity === "ERROR"
          ? "HIGH"
          : vuln.extra.severity === "WARNING"
          ? "MEDIUM"
          : "LOW";
      acc[severity] = (acc[severity] || 0) + 1;
      return acc;
    },
    { HIGH: 0, MEDIUM: 0, LOW: 0 }
  );

  const totalErrors = vulnerabilityData.vulnerabilities.results.length;

  interface severityType {
    [key: string]: string | React.ReactNode;
  }
  const severityColors: severityType = {
    HIGH: "bg-[#C9001E30] text-[#C9001E]",
    MEDIUM: "bg-[#F69C0030] text-[#F69C00]",
    LOW: "bg-[#1E2B5330] text-[#1E2B53]",
  };

  const severityIcons: severityType = {
    HIGH: (
      <AlertOctagon className="text-[#C9001E]" size={30} strokeWidth={2.75} />
    ),
    MEDIUM: (
      <AlertTriangle className="text-[#F69C00]" size={30} strokeWidth={2.75} />
    ),
    LOW: <Ban className="text-[#1E2B53]" size={30} strokeWidth={2.75} />,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className={"bg-[#93AFC9]  rounded-t-lg"}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium capitalize">
              TOTAL
            </CardTitle>
            <ShieldAlert
              size={30}
              strokeWidth={2.75}
              className="bg-[#93AFC9]"
            />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="text-2xl font-bold">{totalErrors}</div>
          </CardContent>
        </Card>
        {Object.entries(severityCounts).map(([severity, count]) => (
          <Card
            key={severity}
            className={`${severityColors[severity]} rounded-t-lg`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium capitalize">
                {severity}
              </CardTitle>
              {severityIcons[severity]}
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="text-2xl font-bold">{count}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between gap-5">
        <Tabs defaultValue="areachart" className="space-y-4 w-1/2 h-full">
          <TabsList>
            <TabsTrigger value="areachart">Area Chart</TabsTrigger>
            <TabsTrigger value="severitychart">Severity Chart</TabsTrigger>
          </TabsList>

          <TabsContent value="areachart">
            <OwaspAreaChart />
          </TabsContent>

          <TabsContent value="severitychart">
            <OwaspPieChart />
          </TabsContent>
        </Tabs>
        <div className="grid grid-cols-1 gap-4">
          {vulnerabilityData.vulnerabilities.results.map((vuln, index) => {
            const severity =
              vuln.extra.severity === "ERROR"
                ? "HIGH"
                : vuln.extra.severity === "WARNING"
                ? "MEDIUM"
                : "LOW";
            return (
              <Card key={index} className="flex item-center">
                <div className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {severityIcons[severity]}
                      <span className="truncate">
                        {vuln.extra.metadata.owasp[0]}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-2 text-primary/90">
                      {vuln.extra.metadata.cwe[0]}
                    </p>
                    <Button
                      className="w-50 place-items-end"
                      onClick={() => setSelectedVulnerability(vuln)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      {selectedVulnerability && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto">
            <CardHeader>
              <CardTitle>
                {selectedVulnerability.extra.metadata.owasp[0]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{selectedVulnerability.extra.message}</p>
              <p className="mb-2">
                <strong>Severity:</strong>{" "}
                {selectedVulnerability.extra.severity === "ERROR"
                  ? "HIGH"
                  : selectedVulnerability.extra.severity === "WARNING"
                  ? "MEDIUM"
                  : "LOW"}
              </p>
              <p className="mb-2">
                <strong>CWE:</strong>{" "}
                {selectedVulnerability.extra.metadata.cwe.join(", ")}
              </p>
              <p className="mb-2">
                <strong>Check ID:</strong> {selectedVulnerability.check_id}
              </p>
              <p className="mb-4">
                <strong>Location:</strong> {selectedVulnerability.path}
              </p>
              <span className="mb-4 flex gap-2">
                <strong>Mitigation:</strong>
                <span className="flex flex-col gap-1">
                  {selectedVulnerability.extra.metadata.references.map(
                    (ref: any) => {
                      return (
                        <a
                          href={ref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          {ref}
                        </a>
                      );
                    }
                  )}
                </span>
              </span>
            </CardContent>
            <div className="p-4 pt-0">
              <Button onClick={() => setSelectedVulnerability(null)}>
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
