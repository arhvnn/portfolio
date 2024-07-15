"use client";

import { useCallback, useEffect, useState } from "react";

type progressProps = { target: React.RefObject<HTMLElement> };

export default function Progress({ target }: progressProps) {
  const [readProgress, setReadProgress] = useState(0);
  const scrollListener = useCallback(() => {
    if (!target.current) return;
    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (windowScrollTop === 0) return setReadProgress(0);
    if (windowScrollTop > totalHeight) return setReadProgress(100);
    setReadProgress((windowScrollTop / totalHeight) * 100);
  }, [target]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);

  return (
    <div className="w-full fixed top-16 left-0 right-0 z-50">
      <div
        className="h-[2px] bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500"
        style={{ width: `${readProgress}%` }}
      />
    </div>
  );
}
