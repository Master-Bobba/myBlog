const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Bozhidar Ayvazov",
    image: "/avatar2.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app -> "/avatar.svg"
    role: "Software Engineer",
    bio: "I like writing code..",
    email: "bgayvazov@gmail.com",
    linkedin: "bozhidar-ayvazov-362469a0n",
    github: "Master-Bobba",
    instagram: "bayvazov",
  },
  projects: [
    {
      name: `Master-Bobba`,
      href: "https://github.com/Master-Bobba/myBlog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Master-Bobba's Blog",
    description: "welcome to my blog!",
    theme: "light",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-UK", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
