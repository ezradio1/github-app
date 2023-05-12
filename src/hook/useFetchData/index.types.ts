export interface UseFetchDataProps<T> {
  url: string;
  params?: Record<string, string | number>;
  initialData?: T | null;
  skip?: boolean;
}
