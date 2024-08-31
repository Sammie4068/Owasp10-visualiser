const paths = {
  home() {
    return "/";
  },
  visualPage() {
    return "/visual";
  },
  riskPage(slug: string) {
    return `/risks/${slug}`;
  },
};

export default paths;
