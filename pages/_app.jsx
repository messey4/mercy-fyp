import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <main className={`min-h-screen ${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
