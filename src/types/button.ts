export interface BtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
size?: "sm" | "md" | "lg";
}
