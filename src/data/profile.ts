// 보여 주기용 더미 데이터입니다. 실제 내용은 나중에 이 파일만 바꾸면 됩니다.

export type LinkItem = {
  label: string;
  url: string;
};

export const profile = {
  name: "홍길동",
  bio: "열심히만 하자~~",
  imageUrl: "/profile.svg",
};

export const links: LinkItem[] = [
  { label: "GitHub", url: "https://github.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com" },
  { label: "Blog", url: "https://example.com" },
];
