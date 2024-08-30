"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
  { segment: "model", risks: 5, fill: "#C9001E" },
  { segment: "view", risks: 7, fill: "#1E2B53" },
  { segment: "controller", risks: 9, fill: "#F69C00" },
];

const chartConfig = {
  risks: {
    label: "Vulnerabilities",
  },
  model: {
    label: "Model",
    color: "hsl(var(--chart-1))",
  },
  view: {
    label: "View",
    color: "hsl(var(--chart-3))",
  },
  controller: {
    label: "Controller",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function OwaspPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>MVC Vulnerability Area Chart</CardTitle>
        <CardDescription>
          Showing the total vulnerabilities per Model, View and Controller
          segmentations
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="risks"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {`${payload.risks}`}
                  </text>
                );
              }}
              nameKey="segment"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="segment" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
