"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dummyData } from "../../public/dummyData";

export default function SemgrepSeverityCard() {
  const errorsFound = dummyData.vulnerabilities.errors;
  if (!errorsFound || errorsFound.length == 0) {
    return <></>;
  }

  const renderedCards = errorsFound.map((item, idx) => {
    return (
      <Card key={idx}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium capitalize">
            {item.level}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          {item.message}
        </CardContent>
      </Card>
    );
  });

  return <>{renderedCards}</>;
}
