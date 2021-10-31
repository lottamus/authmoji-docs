/** @type {import('next-seo').DefaultSeoProps} */
const defaultConfig = {
  defaultTitle: "Authmoji Docs",
  titleTemplate: "%s | Authmoji Docs",
  description:
    "Authmoji delivers a robust API and app that helps you verify and secure users and future proof your business using emoji based two-factor authentication.",
  twitter: {
    handle: "@authmoji",
    site: "@authmoji",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://docs.authmoji.com",
    title: "Authmoji Docs",
    description:
      "Authmoji delivers a robust API and app that helps you verify and secure users and future proof your business using emoji based two-factor authentication.",
    images: [
      {
        url: "/banner.png",
        width: 1388,
        height: 760,
        alt: "Authmoji",
      },
    ],
  },
  dangerouslySetAllPagesToNoIndex:
    process.env.NODE_ENV === "production" ? false : true,
  dangerouslySetAllPagesToNoFollow:
    process.env.NODE_ENV === "production" ? false : true,
};

export default defaultConfig;
