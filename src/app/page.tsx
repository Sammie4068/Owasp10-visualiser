import UploadButton from "@/components/UploadButton";
import { OwaspTenAccordion } from "../components/OwaspTenAccordion";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 w-full h-full bg-gradient-to-b from-[#93AFC9] to-cyan-500 px-5 py-2">
        <h1 className="text-center m-3 font-bold text-xl">
          Top 10 Web Application Security Risks
        </h1>
        <OwaspTenAccordion />
      </div>
      <div className="md:w-3/5 w-full h-screen flex flex-col items-center p-5 gap-10">
        <div className="flex flex-col items-start mt-20">
          <div className="text-5xl font-extrabold text-gray-900 mb-4">
            Visualize your Codebase
          </div>
          <div className="text-lg text-gray-600 text-center max-w-xl">
            Upload your MVP based code to receive an in-depth, visual analysis of the
            OWASP Top 10 vulnerabilities, along with tailored mitigation
            strategies.
          </div>
        </div>
        <div className="p-5">
          <UploadButton />
        </div>
      </div>
    </div>
  );
}
