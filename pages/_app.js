// pages/_app.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import useDarkMode from "../utils/useDarkMode";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);

  const [isDark, toggleDark] = useDarkMode();

  return (
    <>
      {loading && (
        <div className="absolute top-[67px] left-0  lg:left-[259px] right-0 bottom-0 z-40 bg-white dark:bg-gray-900 px-6 py-4 overflow-y-auto h-[93%]">
          {/* Filter Bar Skeleton */}

          {/* Table Rows Skeleton */}
          {[...Array(11)].map((_any, i) => (
            <div
              key={i}
              className="flex  justify-between gap-3 py-4 border-b border-gray-100 dark:border-gray-700 animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex flex-col gap-1">
                  <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="w-24 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="w-[350px] h-4 bg-gray-300 dark:bg-gray-700 rounded mt-1"></div>
              <div className="w-[350px] h-4 bg-gray-300 dark:bg-gray-700 rounded mt-1"></div>
              <div className="w-[350px] h-4 bg-gray-300 dark:bg-gray-700 rounded mt-1"></div>
            </div>
          ))}
        </div>
      )}

      <div className="flex h-screen overflow-hidden customeBackground text-gray-800">
        {/* Sidebar */}
        <Sidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <Header
            onToggleMobileSidebar={() => setMobileSidebarOpen(true)}
            toggleDark={toggleDark}
          />

          {/* Main content area */}
          <main className="rounded-[12px] flex-1 overflow-y-auto p-6 bg-white">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </>
  );
}
