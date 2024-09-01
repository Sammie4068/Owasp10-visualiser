import critical from "../../public/critical.svg";
import high from "../../public/high.svg";
import medium from "../../public/medium.svg";
import low from "../../public/low.svg";
import information from "../../public/information.svg";

interface OwaspVulnerability {
  id: number;
  title: string;
  description: string;
  url: string;
}

export const owaspTen: OwaspVulnerability[] = [
  {
    id: 1,
    title: "Broken Access Control",
    description:
      "Broken Access Control refers to flaws that allow attackers to gain unauthorized access to system resources. These flaws often occur due to improper enforcement of user permissions, allowing attackers to bypass access controls and gain elevated privileges, modify data, or access sensitive information.",
    url: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/",
  },
  {
    id: 2,
    title: "Cryptographic Failures",
    description:
      "Cryptographic Failures, previously known as Sensitive Data Exposure, occur when critical data is not adequately protected. This includes improper use of cryptography, such as weak encryption algorithms, improper key management, or missing encryption, leading to exposure of sensitive data.",
    url: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/",
  },
  {
    id: 3,
    title: "Injection",
    description:
      "Injection vulnerabilities, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. This can trick the interpreter into executing unintended commands or accessing data without proper authorization.",
    url: "https://owasp.org/Top10/A03_2021-Injection/",
  },
  {
    id: 4,
    title: "Insecure Design",
    description:
      "Insecure Design refers to the lack of security controls and practices during the design phase of software development. It includes threats and risks that are not anticipated or mitigated during the design process, leading to inherent weaknesses in the software.",
    url: "https://owasp.org/Top10/A04_2021-Insecure_Design/",
  },
  {
    id: 5,
    title: "Security Misconfiguration",
    description:
      "Security Misconfiguration is one of the most common vulnerabilities, arising from incorrect settings, insecure default configurations, or failing to securely configure the application environment. It can lead to unauthorized access, exposure of sensitive information, and other security risks.",
    url: "https://owasp.org/Top10/A05_2021-Security_Misconfiguration/",
  },
  {
    id: 6,
    title: "Vulnerable and Outdated Components",
    description:
      "Using Vulnerable and Outdated Components, such as libraries, frameworks, or other software modules, can introduce security risks. Attackers can exploit known vulnerabilities in these components to compromise the application, leading to potential data breaches, denial of service, or other security issues.",
    url: "https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/",
  },
  {
    id: 7,
    title: "Identification and Authentication Failures",
    description:
      "Previously known as Broken Authentication, Identification and Authentication Failures occur when the identity of a user is not correctly verified, allowing attackers to assume the identities of other users. This can lead to unauthorized access to data and systems.",
    url: "https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/",
  },
  {
    id: 8,
    title: "Software and Data Integrity Failures",
    description:
      "Software and Data Integrity Failures involve the exploitation of vulnerabilities in software supply chains and data integrity, such as through malicious code injection or unauthorized modifications to software and data. This can lead to compromised software, data corruption, and other serious security issues.",
    url: "https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/",
  },
  {
    id: 9,
    title: "Security Logging and Monitoring Failures",
    description:
      "Security Logging and Monitoring Failures occur when insufficient logging and monitoring allow attackers to remain undetected for long periods, increasing the risk and impact of an attack. Without effective logging and monitoring, it is difficult to detect and respond to security incidents.",
    url: "https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/",
  },
  {
    id: 10,
    title: "Server-Side Request Forgery (SSRF)",
    description:
      "Server-Side Request Forgery (SSRF) occurs when an attacker can force a server to make HTTP requests to arbitrary domains, bypassing firewalls, VPNs, and other access controls. This can lead to information disclosure, server compromise, or access to internal resources.",
    url: "https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/",
  },
];

// export function severityScale(): ScaleProps[] {
export const levels = [
  {
    title: "critical",
    icon: critical,
    description: "High impact, immediate action required",
  },
  {
    title: "high",
    icon: high,
    description: "High impact, prompt action required",
  },
  {
    title: "medium",
    icon: medium,
    description: "Moderate impact, attention required",
  },
  {
    title: "low",
    icon: low,
    description: "Minimal impact, monitoring required",
  },
  {
    title: "information",
    icon: information,
    description: "No impact, informational only",
  },
];

export const severityColorVariants: any = {
  critical: "bg-critical",
  high: "bg-high",
  medium: "bg-medium",
  low: "bg-low",
  information: "bg-imformation",
};

export const lightSeverityColorVariant: any = {
  critical: "bg-critical-background",
  high: "bg-high-background",
  medium: "bg-medium-background",
  low: "bg-low-background",
  information: "bg-information-background",
};
