export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onClick: () => void;
  profile: string
}
