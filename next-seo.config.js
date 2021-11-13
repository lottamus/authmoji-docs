/** @type {import('next-seo').DefaultSeoProps} */
const defaultConfig = {
  defaultTitle: "Authmoji Documentation",
  titleTemplate: "%s | Authmoji Documentation",
  description:
    "Authmoji delivers a robust API that helps you verify users and future proof your business using emoji based two-factor authentication.",
  twitter: {
    handle: "@chrisnlott",
    site: "@authmoji",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://docs.authmoji.com",
    title: "Authmoji Documentation",
    description:
      "Authmoji delivers a robust API that helps you verify users and future proof your business using emoji based two-factor authentication.",
    images: [
      {
        url: "https://docs.authmoji.com/meta.png",
        width: 1200,
        height: 630,
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
