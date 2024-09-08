import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AllGood() {
  return (
    <Card className="w-full max-w-md m-auto flex flex-col items-center justify-center">
      <CardHeader className="text-xl font-bold text-center text-green-700">
        ALL GOOD!
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="relative w-24 h-24 mb-4">
          <CheckCircle className="w-24 h-24 text-green-500 animate-pulse" />
          <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping" />
        </div>
        <p className="text-xl font-semibold text-center text-primary/80">
          No OWASP vulnerabilities detected
        </p>
      </CardContent>
    </Card>
  );
}
