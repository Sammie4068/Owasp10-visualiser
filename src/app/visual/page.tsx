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

import { Key, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  AlertCircle,
  AlertOctagon,
  ShieldAlert,
  Ban,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import vulnerabilityData from "@/data/j2.json";
import { OwaspAreaChart } from "@/components/charts/OwaspAreaChart";
import { OwaspPieChart } from "@/components/charts/OwaspPieChart";
import { Badge } from "@/components/ui/badge";

export default function VisualizationPage() {
  const [selectedVulnerability, setSelectedVulnerability] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

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

  const groupedVulnerabilities =
    vulnerabilityData.vulnerabilities.results.reduce((acc: any, vuln) => {
      const owasp = vuln.extra.metadata.owasp[0];
      if (!acc[owasp]) {
        acc[owasp] = [];
      }
      acc[owasp].push(vuln);
      return acc;
    }, {});

  const totalPages = selectedVulnerability
    ? Math.ceil(selectedVulnerability.length / itemsPerPage)
    : 0;

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
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
          {Object.entries(groupedVulnerabilities).map(([owasp, vulns]: any) => {
            const highestSeverity = vulns.reduce(
              (acc: string, vuln: { extra: { severity: string } }) => {
                const severity =
                  vuln.extra.severity === "ERROR"
                    ? "HIGH"
                    : vuln.extra.severity === "WARNING"
                    ? "MEDIUM"
                    : "LOW";
                return severity === "HIGH"
                  ? "HIGH"
                  : severity === "MEDIUM" && acc !== "HIGH"
                  ? "MEDIUM"
                  : acc;
              },
              "LOW"
            );

            return (
              <Card key={owasp} className="flex item-center">
                <div className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        {severityIcons[highestSeverity]}
                        <span className="truncate">{owasp}</span>
                      </div>
                      {vulns.length > 1 && (
                        <Badge variant={"secondary"}>{vulns.length}</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-2 text-primary/90">
                      {vulns[0].extra.metadata.cwe[0]}
                    </p>
                    <Button
                      className="w-50 place-items-end bg-[#93AFC9] hover:bg-[#93AFC990] "
                      onClick={() => setSelectedVulnerability(vulns)}
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
          <Card className="w-full max-w-2xl h-[80vh] flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{selectedVulnerability[0].extra.metadata.owasp[0]}</span>
                <span className="text-sm font-normal">
                  {currentPage} of {totalPages}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto scrollbar-hide">
              {selectedVulnerability
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((vuln: any, index: Key | null | undefined) => {
                  return (
                    <div
                      key={index}
                      className="mb-6 pb-6 border-b last:border-b-0"
                    >
                      <h2 className="text-lg font-bold text-primary/90 mb-2">
                        Description
                      </h2>
                      <p className="mb-4">{vuln.extra.message}</p>
                      <p className="mb-2">
                        <strong>Severity:</strong>{" "}
                        {vuln.extra.severity === "ERROR"
                          ? "HIGH"
                          : vuln.extra.severity === "WARNING"
                          ? "MEDIUM"
                          : "LOW"}
                      </p>
                      <p className="mb-2">
                        <strong>CWE:</strong>{" "}
                        {vuln.extra.metadata.cwe.join(", ")}
                      </p>
                      <p className="mb-2">
                        <strong>Check ID:</strong> {vuln.check_id}
                      </p>
                      <p className="mb-2">
                        <strong>Location path:</strong> {vuln.path}
                      </p>
                    </div>
                  );
                })}
            </CardContent>
            <div className="p-4 pt-0 flex justify-between items-center">
              <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4 mr-2" /> Prev
              </Button>
              <Button
                onClick={() => {
                  setCurrentPage(1);
                  setSelectedVulnerability(null);
                }}
                className="bg-green-800 hover:bg-green-800/90 w-1/2"
              >
                Done
              </Button>
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
