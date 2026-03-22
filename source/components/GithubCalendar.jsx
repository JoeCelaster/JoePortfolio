"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubCalendarSection() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="text-lg font-medium text-black dark:text-white">
        JC's GitHub Activity
      </h2>

      <div
        className="
          w-fit
          p-4
          rounded-xl
          border border-zinc-200 dark:border-white/10
          bg-white dark:bg-black
          shadow-[0_3px_12px_rgba(0,0,0,0.05)]
          dark:shadow-[0_3px_12px_rgba(255,255,255,0.06)]
          overflow-hidden
        "
      >
        <div className="scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-90 origin-top min-w-fit">
          <GitHubCalendar
            username="joecelaster"
            blockSize={8}
            blockMargin={2}
            fontSize={10}
            hideTotalCount
            hideColorLegend
            colorScheme="dark"
          />
        </div>
      </div>
    </div>
  );
}