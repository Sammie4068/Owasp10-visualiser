import critical from "../../public/critical.svg";
import high from "../../public/high.svg";
import medium from "../../public/medium.svg";
import low from "../../public/low.svg";
import information from "../../public/information.svg";

interface OwaspVulnerability {
  id: number;
  title: string;
  description: string;
}

export const owaspTen: OwaspVulnerability[] = [
  {
    id: 1,
    title: "Broken Access Control",
    description:
      "Broken Access Control refers to flaws that allow attackers to gain unauthorized access to system resources. These flaws often occur due to improper enforcement of user permissions, allowing attackers to bypass access controls and gain elevated privileges, modify data, or access sensitive information.",
  },
  {
    id: 2,
    title: "Cryptographic Failures",
    description:
      "Cryptographic Failures, previously known as Sensitive Data Exposure, occur when critical data is not adequately protected. This includes improper use of cryptography, such as weak encryption algorithms, improper key management, or missing encryption, leading to exposure of sensitive data.",
  },
  {
    id: 3,
    title: "Injection",
    description:
      "Injection vulnerabilities, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. This can trick the interpreter into executing unintended commands or accessing data without proper authorization.",
  },
  {
    id: 4,
    title: "Insecure Design",
    description:
      "Insecure Design refers to the lack of security controls and practices during the design phase of software development. It includes threats and risks that are not anticipated or mitigated during the design process, leading to inherent weaknesses in the software.",
  },
  {
    id: 5,
    title: "Security Misconfiguration",
    description:
      "Security Misconfiguration is one of the most common vulnerabilities, arising from incorrect settings, insecure default configurations, or failing to securely configure the application environment. It can lead to unauthorized access, exposure of sensitive information, and other security risks.",
  },
  {
    id: 6,
    title: "Vulnerable and Outdated Components",
    description:
      "Using Vulnerable and Outdated Components, such as libraries, frameworks, or other software modules, can introduce security risks. Attackers can exploit known vulnerabilities in these components to compromise the application, leading to potential data breaches, denial of service, or other security issues.",
  },
  {
    id: 7,
    title: "Identification and Authentication Failures",
    description:
      "Previously known as Broken Authentication, Identification and Authentication Failures occur when the identity of a user is not correctly verified, allowing attackers to assume the identities of other users. This can lead to unauthorized access to data and systems.",
  },
  {
    id: 8,
    title: "Software and Data Integrity Failures",
    description:
      "Software and Data Integrity Failures involve the exploitation of vulnerabilities in software supply chains and data integrity, such as through malicious code injection or unauthorized modifications to software and data. This can lead to compromised software, data corruption, and other serious security issues.",
  },
  {
    id: 9,
    title: "Security Logging and Monitoring Failures",
    description:
      "Security Logging and Monitoring Failures occur when insufficient logging and monitoring allow attackers to remain undetected for long periods, increasing the risk and impact of an attack. Without effective logging and monitoring, it is difficult to detect and respond to security incidents.",
  },
  {
    id: 10,
    title: "Server-Side Request Forgery (SSRF)",
    description:
      "Server-Side Request Forgery (SSRF) occurs when an attacker can force a server to make HTTP requests to arbitrary domains, bypassing firewalls, VPNs, and other access controls. This can lead to information disclosure, server compromise, or access to internal resources.",
  },
];

interface ScaleProps {
  title: string;
  color: string;
  icon: string;
  description: string;
  count?: number;
}

// export function severityScale(): ScaleProps[] {
export const levels = [
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
