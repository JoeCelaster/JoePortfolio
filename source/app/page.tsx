"use client"

import Image from "next/image";
import GithubCalendar from "@/components/GithubCalendar";
import Script from "next/script";
import { link } from "fs";

export default function Home() {
  const apps = [
    {
      name: "Twitter",
      link:"https://x.com/JCelaster72729",
      color: "text-sky-400",
      glow: "group-hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.9)]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 1668.56 1221.19" viewBox="0 0 1668.56 1221.19" id="twitter-x" className="w-5 h-5 fill-white">
  <path d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" transform="translate(52.39 -25.059)"></path>
</svg>
      ),
    },
    {
      name: "Github",
      color: "text-white",
      link:"https://github.com/joecelaster",
      glow: "group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.8)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.3.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#fff"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      color: "text-blue-400",
      link:"https://www.linkedin.com/in/joe-celaster-9581792a3/",
      glow: "group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.9)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5"/>
        </svg>
      ),
    },
    {
      name: "LeetCode",
      color: "text-orange-400",
      link:"https://leetcode.com/u/Joe_Celaster123/",
      glow: "group-hover:drop-shadow-[0_0_14px_rgba(251,146,60,0.9)]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current" strokeWidth={0.3} viewBox="0 0 24 24" id="leetcode">
  <path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
  <path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
  <path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
</svg>
      ),
    },
    {
      name: "Discord",
      color: "text-indigo-400",
      link:"https://discord.gg/GkDcAErQbD",
      glow: "group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.9)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
         <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 4.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2"/>
        </svg>
      ),
    },
  ];


  return (
    <div className="selection:bg-green-400/50 selection:text-white flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 dark:opacity-30"></div>
      <main className="relative flex border border-gray-900 min-h-screen w-full max-w-3xl flex-col items-center justify-between py-6 sm:py-10 px-4 sm:px-6 lg:px-16 bg-white dark:bg-black sm:items-start">
      
      <div className="flex flex-col gap-8 sm:gap-12 w-full">

      <div className="w-full flex flex-col items-center lg:items-start">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 lg:gap-16">
        <div className="text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold">Joe</h1>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold">Celaster R</h1>
        </div>

        <div className="shrink-0">
          <Image src="/portrait-v3.png" alt="joe-portrait" className="rounded-xl" width={120} height={120} />
        </div>

      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
          <span className="px-3 py-1 border border-gray-200 dark:border-gray-600 text-sm bg-gray-100 dark:bg-gray-900 rounded-full">Software Developer</span>
          <span className="px-3 py-1 border border-gray-200 dark:border-gray-600 text-sm bg-gray-100 dark:bg-gray-900 rounded-full">Indie Musician</span>
          <span className="px-3 py-1 border border-gray-200 dark:border-gray-600 text-sm bg-gray-100 dark:bg-gray-900 rounded-full">Artist</span>
          <span className="px-3 py-1 border border-gray-200 dark:border-gray-600 text-sm bg-gray-100 dark:bg-gray-900 rounded-full">Researcher</span>
      </div>

      </div>

      <div className="space-y-6 sm:space-y-8 w-full">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <h1 className="text-2xl sm:text-3xl font-semibold">Projects</h1>
        </div>

        <div className="grid gap-4 w-full">
          <hr className="text-gray-700"/>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                <Image src="/celtrix.png" alt="Celtrix" width={35} height={35} />
                <h2 className="text-lg sm:text-xl font-semibold">Celtrix</h2>
              </div>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/celtrixio/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/celtrix-os" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://celtrix.tech" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </a>
                <a href="https://discord.gg/GkDcAErQbD" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" >
         <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 4.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2"/>
        </svg>
                </a>
              </div>
            </div>
           <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
  <div className="space-y-4 max-w-full sm:max-w-xl">

    {/* <h1 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
      Setup web apps in seconds, not hours.
    </h1> */}

    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
      Celtrix – An open-source CLI that scaffolds full-stack apps (MERN, MEAN, Next.js) instantly with a single command.
    </p>

    {/* Metrics */}
    <div className="flex flex-wrap gap-4 text-xs text-zinc-500 dark:text-zinc-400">
      <span>⭐ 100+ GitHub Stars</span>
      <span>👥 80+ Member Community</span>
      <span>⬇ 2K+ Downloads</span>
    </div>

    {/* Problem it solves */}
    <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
      Eliminates repetitive project setup and boilerplate configuration, so developers can focus on building features.
    </p>

  </div>
</div>

          </div>

          <hr className="text-gray-800"/>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/iff.svg" alt="InterFreight" width={23} height={23} />
                <h2 className="text-[20px] font-semibold">InterFreight</h2>
              </div>
              <div className="flex gap-3">
                
                
                <a href="https://interfreight.in" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-4 max-w-xl">

                {/* <h1 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
                  Freight Forwarding, Simplified.
                </h1> */}

                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  A logistics platform streamlining international transport, customs clearance, warehousing, and delivery.
                </p>

                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                  Reduces manual coordination and fragmented communication across air, ocean, and land shipments.
                </p>

              </div>
          </div>

          <hr className="text-gray-800" />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/mys.png" alt="ManageYourSaaS" width={30} height={30} />
                <h2 className="text-[20px] font-semibold">ManageYourSaaS</h2>
              </div>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/manageyoursaas/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                <a href="https://manageyoursaas.com" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start gap-8">
  <div className="space-y-4 max-w-xl">

    {/* <h1 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
      One dashboard to manage your entire SaaS.
    </h1> */}

    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
      ManageYourSaaS – A unified platform to track SEO, traffic, engagement, and revenue in one simple place.
    </p>

    <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
      Eliminates tool switching by centralizing analytics, growth metrics, and performance insights.
    </p>

  </div>
</div>


          </div>

          <hr className="text-gray-800" />
          <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <Image src="/plexify.png" alt="Plexify" width={30} height={30} />
                <h2 className="text-[20px] font-semibold">Plexify</h2>
              </div>
                <div className="flex gap-3">

                <a href="https://github.com/JoeCelaster/content-creator-saas" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://plexify-ai.vercel.app/dashboard/meme-generator" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </a>
              </div>
              </div>

              <div className="flex flex-row items-start gap-8">
                <div className="space-y-4 max-w-xl">

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Plexify – An AI-powered micro-content generator for creating memes, carousels, infographics, and social content in one place.
                  </p>

                  <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                    Eliminates content creation friction by automating ideation, design, and formatting for fast social media growth.
                  </p>

                </div>
              </div>
          </div>

          <hr className="text-gray-800" />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image src="/horizon.png" alt="Horizon" width={35} height={35} />
                <h2 className="text-[20px] font-semibold">Horizon</h2>
              </div>
              <div className="flex gap-3">
                
                <a href="https://github.com/JoeCelaster/Horizon" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://horizon-io.netlify.app/" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-row items-start gap-8">
              <div className="space-y-4 max-w-xl">

                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Horizon – An AI-powered platform that helps students discover and choose their ideal college.
                </p>

                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                  Simplifies complex admission decisions using personalized recommendations based on interests, goals, and academic profile.
                </p>

              </div>
            </div>
          </div>
          

          <hr className="text-gray-800" />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/darkin.png" alt="Darkin" width={25} height={25} />
                <h2 className="text-[20px] font-semibold">Darkin</h2>
              </div>
              <div className="flex gap-3">
                
                <a href="https://github.com/JoeCelaster/darkin" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://darkin.netlify.app/" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-row items-start gap-8">
              <div className="space-y-4 max-w-xl">

                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Darkin – A fun platform delivering lesser-known and intriguing facts about famous actors and celebrities.
                </p>

                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                  Turns curiosity into engaging micro-stories, making celebrity insights entertaining and shareable.
                </p>

              </div>
            </div>
          </div>

          <hr className="text-gray-800" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src="/recruiter.png" alt="Horizon" width={25} height={25} />
                  <h2 className="text-[20px] font-semibold">AI Recruiter</h2>
                </div>
                <div className="flex gap-3">
                
                <a href="https://github.com/JoeCelaster/recruit-ai" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://ai-recruiterrr.vercel.app/" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-row items-start gap-8">
              <div className="space-y-4 max-w-xl">

      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        A high-conversion AI recruiter landing page designed to showcase strong UI/UX fundamentals and persuasive hero section strategy.
      </p>

      <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
        Focused on visual hierarchy, conversion-driven copy, call-to-action placement, and modern SaaS design principles.
      </p>

    </div>
  </div>
</div>


        </div>
      </div>
      <hr className="text-gray-700"/>

      <div className="w-full flex justify-center overflow-x-auto">
      <GithubCalendar />
    </div>
  <hr className="text-gray-700"/>

{ /* Experience */ }

<div className="space-y-8">

  {/* Section Header */}
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Experience</h1>
  </div>

  {/* Timeline Wrapper */}
  <div className="relative pl-6 sm:pl-10">

    {/* Vertical Line */}
    <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-zinc-300 dark:bg-zinc-700"></div>

    {/* Timeline Item */}
    <div className="relative space-y-4 max-w-xl">

     
      {/* Date */}
      <p className="text-xs text-zinc-400 dark:text-zinc-500">
        Aug 2025 – Present
      </p>

      {/* Role */}
      <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Founder & Maintainer – Celtrix (Open Source)
      </h2>

      {/* Metrics */}
      <div className="ml-8 flex flex-col gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span>⭐ 100+ GitHub Stars</span>
        <span>⬇️ 2k+ Downloads </span>
        <span>🍴 53 Forks</span>
        <span>👥 Mentored 30+ Contributors</span>
        <span>🚀 30 Days Growth</span>
      </div>

      {/* Description */}
      <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
        Built and scaled an open-source full-stack scaffolding CLI, driving strong community engagement and improving developer workflow efficiency.
      </p>

    </div>

  </div>

</div>

<hr className="text-gray-700"/>

{ /* Achievements */ }

<div className="space-y-8">

  {/* Section Header */}
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Achievements</h1>
  </div>

  {/* Description */}
  <div className="text-center sm:text-left max-w-4xl">
    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
      My project <span className="inline-flex items-center gap-1 font-medium text-gray-800 dark:text-gray-200">
        
        Celtrix
      </span> got featured by a large open source community (<a href="https://twitter.com/GithubProjects" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">@GithubProjects</a>) on X and Threads, and they wrote a detailed blog about it on the Open Source Projects site.
    </p>
    <a 
      href="https://www.opensourceprojects.dev/post/0ff553d9-af97-44f1-9e15-9a1331148bee"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
    >
      Read the full article here
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15,3 21,3 21,9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>
  </div>

  <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center">

    {/* Twitter */}
    <div className="flex justify-center">
      <div className="w-full max-w-[520px]">
        <blockquote
          className="twitter-tweet"
          data-theme="dark"
          data-align="center"
        >
          <p lang="en" dir="ltr">
            Celtrix lets you spin up full-stack apps in seconds.<br/><br/>
            One command.<br/>
            Frontend + backend + database ready.<br/><br/>
            No boilerplate.<br/>
            No manual setup.<br/><br/>
            Works with stacks like MERN, MEAN, Next.js and more.<br/><br/>
            Perfect if you want to start building instead of configuring.
          </p>
          &mdash; GitHub Projects Community (@GithubProjects)
          <a href="https://twitter.com/GithubProjects/status/2032804558632792290">
            March 14, 2026
          </a>
        </blockquote>
      </div>
    </div>

    {/* Threads */}
    <div className="flex justify-center">
      <div className="w-full max-w-[520px]">
        <blockquote
          className="text-post-media"
          data-text-post-permalink="https://www.threads.com/@githubprojects/post/DV3aWsIFKAz"
          data-text-post-version="0"
          id="ig-tp-DV3aWsIFKAz"
        >
          <a
            href="https://www.threads.com/@githubprojects/post/DV3aWsIFKAz"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Threads
          </a>
        </blockquote>

        <Script
          async
          src="https://www.threads.com/embed.js"
          strategy="lazyOnload"
        />
      </div>
    </div>

  </div>

</div>

{/* Twitter Widget Script */}
<Script
  async
  src="https://platform.twitter.com/widgets.js"
  strategy="lazyOnload"
/>

<hr className="text-gray-700"/>

      <div className="space-y-10">

  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Skills</h1>
  </div>




  <div className="space-y-8">

    {/* Core Stack */}
    <div className="space-y-3">
      <h3 className="text-base font-medium text-zinc-700 dark:text-zinc-300">
        Core Stack
      </h3>

      <div className="flex flex-wrap gap-2 sm:gap-3 text-sm text-zinc-600 dark:text-zinc-400">
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">React</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Next.js</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Node.js</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Express</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">MongoDB</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">PostgreSQL</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Prisma</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Tailwind CSS</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Flutter</span>
      </div>
    </div>

    {/* Other Tools */}
    <div className="space-y-3">
      <h3 className="text-base font-medium text-zinc-700 dark:text-zinc-300">
        Tools
      </h3>

      <div className="flex flex-wrap gap-2 sm:gap-3 text-sm text-zinc-600 dark:text-zinc-400">
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Docker</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Git</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Vercel</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Render</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Firebase</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Supabase</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">Google Cloud</span>
        <span className="border border-gray-800 p-1 rounded-xl text-xs sm:text-sm">n8n</span>
      </div>
    </div>

  </div>
</div>

      <hr className="text-gray-700"/>
      </div>

      {/* Footer */}
      <div className="w-full text-left py-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-600">
          © 2026 All rights reserved
          
        </p>
        <p className="text-right text-sm text-gray-700 dark:text-gray-400">Created with ❤️ by<br/>Joe Celaster</p>
      </div>

      {/* macOS-style dock */}
      <div className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
           flex items-center gap-1 sm:gap-1.5
           p-2
           rounded-2xl
           backdrop-blur-[4px]
           bg-black/40
           border border-white/20
           shadow-[0_1px_20px_rgba(0,255,255,0.3)]
        "
      >
        {apps.map((app, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            
            <div
              className={`
              w-10 h-10 sm:w-12 sm:h-12
              flex items-center justify-center
              rounded-xl
              bg-black/40
              border border-white/20
              transition-all duration-300
              hover:bg-black/80
              group-hover:scale-110
              group-hover:-translate-y-1.5
              ${app.color}
              ${app.glow}
              cursor-pointer
            `}
            >
             <a href={app.link}>{app.icon}</a>
            </div>

            {/* Small active dot */}
            <div className="w-1 h-1 bg-white/70 rounded-full opacity-0 group-hover:opacity-100 transition" />

            {/* Compact Tooltip */}
            <div
              className="
              absolute bottom-full mb-2
              px-2 py-1
              rounded-md
              bg-black/80
              text-white text-[10px]
              opacity-0 group-hover:opacity-100
              transition-all duration-200
              translate-y-1 group-hover:translate-y-0
              whitespace-nowrap
            "
            >
              {app.name}
            </div>
          </div>
        ))}
      </div>
    </div>
      </main>
    </div>
  );
}
