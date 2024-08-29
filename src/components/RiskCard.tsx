import { Badge } from "@/components/ui/badge";

export default function RiskCard() {
  return (
    <div className="w-full md:w-1/3 p-5">
      <div className=" h-[60px] p-5 rounded-lg border text-card-foreground shadow-sm flex items-center justify-between cursor-pointer transform transition-transform duration-400 hover:scale-105 bg-red-300">
        <p className="text-xl font-semibold leading-none tracking-tight">
          Broken Authentication
        </p>
        <Badge className="bg-red-900">Critical</Badge>
      </div>
    </div>
  );
}
