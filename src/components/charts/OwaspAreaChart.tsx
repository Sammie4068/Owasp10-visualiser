"use client";

import { Asterisk } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "A01", High: 5, Medium: 3, Low: 2 },
  { category: "A02", High: 2, Medium: 4, Low: 3 },
  { category: "A03", High: 4, Medium: 2, Low: 1 },
  { category: "A04", High: 3, Medium: 0, Low: 1 },
  { category: "A05", High: 7, Medium: 4, Low: 2 },
  { category: "A06", High: 4, Medium: 8, Low: 5 },
  { category: "A07", High: 3, Medium: 9, Low: 1 },
  { category: "A08", High: 5, Medium: 7, Low: 4 },
  { category: "A09", High: 0, Medium: 1, Low: 2 },
  { category: "A10", High: 0, Medium: 9, Low: 8 },
];

const chartConfig = {
  High: {
    label: "High",
    color: "hsl(var(--chart-1))",
  },
  Medium: {
    label: "Medium",
    color: "hsl(var(--chart-2))",
  },
  Low: {
    label: "Low",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function OwaspAreaChart() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Vulnerability Severity Trend</CardTitle>
        <CardDescription>
          Showing Vulnerability severity trends by Owasp top 10
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="High"
              type="natural"
              fill="#C9001E"
              fillOpacity={0.7}
              stroke="#C9001E"
              stackId="a"
            />
            <Area
              dataKey="Medium"
              type="natural"
              fill="#F69C00"
              fillOpacity={0.7}
              stroke="#F69C00"
              stackId="a"
            />
            <Area
              dataKey="Low"
              type="natural"
              fill="#1E2B53"
              fillOpacity={0.7}
              stroke="#1E2B53"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {/* Vulnerabilities are abbreviated */}
              {/* <Asterisk className="h-4 w-4" /> */}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {/* January - June 2024 */}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
