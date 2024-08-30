"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { severityScale } from "@/data/owasp-ten";

import Image from "next/image";

export default function SeverityCard() {
  const renderedScale = severityScale().map((item) => {
    return (
      <Card key={item.title} style={{ backgroundColor: `${item.color}` }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium capitalize">
            {item.title}
          </CardTitle>
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
            {item.count ? item.count : 0 }
          </div>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    );
  });

  return <>{renderedScale}</>;
}
