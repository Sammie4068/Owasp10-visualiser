import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import critical from "../../public/critical.svg";
import high from "../../public/high.svg";
import medium from "../../public/medium.svg";
import low from "../../public/low.svg";
import information from "../../public/information.svg";
import Image from "next/image";

export default function SeverityCard() {
  const severityScale = [
    {
      title: "critical",
      color: "#DB273C50",
      icon: critical,
      description: "High impact, immediate action required",
    },
    {
      title: "high",
      color: "#FC365640",
      icon: high,
      description: "High impact, prompt action required",
    },
    {
      title: "medium",
      color: "#FF530030",
      icon: medium,
      description: "Moderate impact, attention required",
    },
    {
      title: "low",
      color: "#FFBD0020",
      icon: low,
      description: "Minimal impact, monitoring required",
    },
    {
      title: "information",
      color: "#453A3D10",
      icon: information,
      description: "No impact, informational only",
    },
  ];

  const renderedScale = severityScale.map((item) => {
    return (
      <Card key={item.title} style={{ backgroundColor: `${item.color}` }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium capitalize">{item.title}</CardTitle>
          <Image
            src={item.icon}
            width={25}
            height={25}
            alt="icon"
            priority={true}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="text-2xl font-bold">
            {Math.floor(Math.random() * 10)}
          </div>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    );
  })

  return (
    <>{renderedScale}</>
  );
}
