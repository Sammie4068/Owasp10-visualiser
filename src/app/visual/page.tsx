import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SeverityCard from "@/components/SeverityCard";
import { OwaspBarChart } from "@/components/charts/OwaspBarChart";
import { OwaspAreaChart } from "@/components/charts/OwaspAreaChart";
import { OwaspPieChart } from "@/components/charts/OwaspPieChart";
import RiskCard from "@/components/RiskCard";

export default function VisualizationPage() {
  return (
    <main className="container mx-auto p-4 space-y-5">
      <section className="flex items-center justify-between">
        <SeverityCard />
      </section>
      <section className="flex justify-between">
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
        <RiskCard />
      </section>
    </main>
  );
}
