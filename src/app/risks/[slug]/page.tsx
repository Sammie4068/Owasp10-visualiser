import Image from "next/image";

interface RiskPageProps {
  params: {
    slug: string;
  };
}

export default function RiskPage({ params }: RiskPageProps) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  return (
    <main className="container my-7">
      {/* <div className="flex items-center gap-5">
        <h1 className="text-4xl font-bold text-primary/80">
          Broken Access Control
        </h1>
        <span>
          <Image
            src="/critical.svg"
            width={50}
            height={50}
            alt="icon"
            priority={true}
          />
        </span>
      </div>
      <hr className="my-4" />
      <div>
        <h2>Description</h2>
        <article>
          <p>
            Access control enforces policy such that users cannot act outside of
            their intended permissions. Failures typically lead to unauthorized
            information disclosure, modification, or destruction of all data or
            performing a business function outside the user's limits. Common
            access control vulnerabilities include:
          </p>
          <ul>
            <li>
              Violation of the principle of least privilege or deny by default,
              where access should only be granted for particular capabilities,
              roles, or users, but is available to anyone.
            </li>
            <li>
              Violation of the principle of least privilege or deny by default,
              where access should only be granted for particular capabilities,
              roles, or users, but is available to anyone.
            </li>
            <li>
              Violation of the principle of least privilege or deny by default,
              where access should only be granted for particular capabilities,
              roles, or users, but is available to anyone.
            </li>
            <li>
              Violation of the principle of least privilege or deny by default,
              where access should only be granted for particular capabilities,
              roles, or users, but is available to anyone.
            </li>
          </ul>
        </article>
      </div>
      <hr className="my-4" />
      <div>
        <h2>Mitigation Strategy</h2>
        <article>
          <p>
            Access control enforces policy such that users cannot act outside of
            their intended permissions. Failures typically lead to unauthorized
            information disclosure, modification, or destruction of all data or
            performing a business function outside the user's limits. Common
            access control vulnerabilities include:
          </p>
          <ul>
            <li>
              Violation of the principle of least privilege or deny by default,
              where access should only be granted for particular capabilities,
              roles, or users, but is available to anyone.
            </li>
            <li>
              Violation of the principle of least privilege or deny by default,
              where access should only be granted for particular capabilities,
              roles, or users, but is available to anyone.
            </li>
            <li>
              Violation of the principle of least privilege or deny by default,
              where access should only be granted for particular capabilities,
              roles, or users, but is available to anyone.
            </li>
            <li>
              Violation of the principle of least privilege or deny by default,
              where access should only be granted for particular capabilities,
              roles, or users, but is available to anyone.
            </li>
          </ul>
        </article>
      </div> */}
    </main>
  );
}
