"use server";

import { redirect } from "next/navigation";

function isValidGitHubRepoLink(url: string) {
  const githubRepoPattern = /^https:\/\/github\.com\/[\w-]+\/[\w.-]+\.git$/;
  return githubRepoPattern.test(url);
}

export type FormState = {
  message?: string;
  error?: string;
};

export async function getAnalysisData(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const input = formData.get("input") as string;

  if (!isValidGitHubRepoLink(input)) {
    return {
      error:
        "Invalid GitHub repository link. Please enter a valid URL ending with .git (e.g., https://github.com/username/repo.git).",
    };
  }

  // Here you would typically send this data to a database or external API
  console.log("Received valid GitHub repository link:", input);

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a response
  // return { message: `Form submitted with GitHub repository: ${input}` };
  redirect("/visual");
}
