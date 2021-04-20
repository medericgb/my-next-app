import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function ErrorPage() {
  const router = useRouter();

  useEffect(() => {
    console.log("Page Not Found");
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);

  return (
    <div className="error-page">
      <h2>Error Page</h2>
      <a>
        <Link href="/">Go to Homepage</Link>
      </a>
    </div>
  );
}

export default ErrorPage;
