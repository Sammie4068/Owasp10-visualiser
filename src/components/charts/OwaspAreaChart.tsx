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
  { risk: "BAA", model: 0.78, view: 0.85, controller: 1.15 },
  { risk: "CF", model: 1.24, view: 1.12, controller: 0.96 },
  { risk: "Inj", model: 0.92, view: 0.74, controller: 0.89 },
  { risk: "ID", model: 0.34, view: 0.63, controller: 0.78 },
  { risk: "SM", model: 0.67, view: 0.91, controller: 1.02 },
  { risk: "VOC", model: 0.45, view: 0.68, controller: 0.85 },
  { risk: "IAF", model: 0.89, view: 0.59, controller: 0.71 },
  { risk: "SDIF", model: 0.29, view: 0.77, controller: 0.94 },
  { risk: "SLMF", model: 0.86, view: 0.81, controller: 0.92 },
  { risk: "SSRF", model: 0.56, view: 0.9, controller: 0.78 },
];

const chartConfig = {
  model: {
    label: "Model",
    color: "hsl(var(--chart-1))",
  },
  view: {
    label: "View",
    color: "hsl(var(--chart-2))",
  },
  controller: {
    label: "Controller",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function OwaspAreaChart() {
  // const data = localStorage.getItem("chartData");
  // if (!data) return;
  // const chartData = JSON.parse(data);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>MVC Vulnerability Area Chart</CardTitle>
        <CardDescription>
          Showing vulnerability score per Model, View and Controller
          segmentations
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
              dataKey="risk"
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
              dataKey="model"
              type="natural"
              fill="#C9001E"
              fillOpacity={0.7}
              stroke="#C9001E"
              stackId="a"
            />
            <Area
              dataKey="view"
              type="natural"
              fill="#1E2B53"
              fillOpacity={0.7}
              stroke="#1E2B53"
              stackId="a"
            />
            <Area
              dataKey="controller"
              type="natural"
              fill="#F69C00"
              fillOpacity={0.7}
              stroke="#F69C00"
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
              Vulnerabilities are abbreviated
              <Asterisk className="h-4 w-4" />
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
