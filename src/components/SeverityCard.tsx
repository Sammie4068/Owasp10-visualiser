"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { levels } from "@/data/owasp-ten";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SeverityCard() {
  const [counts, setcounts] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("severityCount");
      setcounts(value);
    }
  }, []);

  const parsedCounts = counts ? JSON.parse(counts) : [];

  const scaleData = levels.map((item) => ({
    ...item,
    count: parsedCounts[item.title.toLowerCase()],
  }));

  const renderedScale = scaleData.map((item) => {
    return (
      <Card key={item.title} className={`bg-${item.title}-background`}>
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
            {item.count ? item.count : 0}
          </div>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    );
  });

  return <>{renderedScale}</>;
}
