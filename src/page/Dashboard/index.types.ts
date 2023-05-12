export interface Repository {
  id: number;
  stargazers_count: number;
  name: string;
  description: string;
  html_url: string;
}

export interface ResponseSearch {
  items: {
    id: number;
    login: string;
    avatar_url: string;
    url: string;
    score: number;
  }[];
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  score: number;
  isFirstFetch: boolean;
  repo: Repository[];
}
