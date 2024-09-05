"use client";

// import UploadButton from "@/components/upload-button/UploadButton";
import { OwaspTenAccordion } from "../components/OwaspTenAccordion";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { getAnalysisData, FormState } from "./actions";
// import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

function isValidGitHubRepoLink(url: string) {
  const githubRepoPattern = /^https:\/\/github\.com\/[\w-]+\/[\w.-]+\.git$/;
  return githubRepoPattern.test(url);
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Scanning..." : "Scan"}
    </Button>
  );
}

export default function Home() {
  const [input, setInput] = useState("");
  const [state, formAction] = useFormState<FormState, FormData>(
    getAnalysisData,
    {
      message: "",
    }
  );
  const [clientError, setClientError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientError("");

    if (!isValidGitHubRepoLink(input)) {
      setClientError(
        "Please enter a valid GitHub repository URL ending with .git (e.g., https://github.com/username/repo.git)."
      );
      return;
    }
    const formData = new FormData(e.currentTarget);
    formAction(formData);
  };

  return (
    <main className="flex flex-col md:flex-row">
      <div className="md:w-2/5 w-full h-full bg-gradient-to-b from-[#93AFC9] to-cyan-500 px-5 py-2">
        <h1 className="text-center m-3 font-bold text-xl">
          Top 10 Web Application Security Risks
        </h1>
        <OwaspTenAccordion />
      </div>
      <div className="md:w-3/5 w-full h-screen flex flex-col items-center p-5 gap-10">
        <div className="flex flex-col items-start gap-3 mt-20">
          <div className="text-5xl font-extrabold text-gray-900 mb-4">
            Visualize your Codebase
          </div>
          <div className="text-lg text-gray-600 text-center max-w-xl">
            Provide the git link to the codebase to receive a comprehensive
            visual analysis of potential OWASP Top 10 vulnerabilities, complete
            with customized mitigation strategies to enhance application
            security.
          </div>
        </div>
        {/* <div className="p-5">
          <UploadButton />
        </div> */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div>
            <Input
              id="repo-url"
              name="input"
              type="url"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setClientError("");
              }}
              placeholder="https://github.com/username/repo.git"
              className="mb-2"
            />
          </div>
          <SubmitButton />
        </form>
        {clientError && (
          <Alert variant="destructive" className="mt-2">
            <AlertDescription>{clientError}</AlertDescription>
          </Alert>
        )}
        {state.error && (
          <Alert variant="destructive" className="mt-2">
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}
        {state.message && (
          <Alert
            variant="default"
            className="mt-2 bg-green-100 text-green-800 border-green-300"
          >
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
      </div>
    </main>
  );
}
