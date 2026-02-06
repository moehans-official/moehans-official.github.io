import { defineConfig } from "vitepress";

export default defineConfig({
  title: "MoehansStudio",
  description: "AI LLM Studio",
  lang: "en-US",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Project", link: "https://moehans-official.github.io/VeloeraCE/" },
      { text: "GitHub", link: "https://github.com/moehans-official/moehans-official.github.io" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/moehans-official" }
    ],
    footer: {
      message: "MoehansStudio",
      copyright: `Copyright ${new Date().getFullYear()} MoehansStudio`
    }
  }
});
