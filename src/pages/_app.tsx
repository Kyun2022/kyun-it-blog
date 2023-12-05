import Link from "next/link";
import "../styles/globals.css";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="mx-auto max-w-prose">
      <header className="border-b border-gray-300 py-8">
        <h1>
          <Link href="/" className="text-5xl font-bold ">
            きゅんのITブログ
          </Link>
        </h1>
      </header>
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
