import { Button } from "@/components/ui/button";

export default function FormButton({ children, isLoading, className, ...props }) {
  return (
    <Button
      className={`w-full h-12 text-base font-medium ${className || ""}`}
      disabled={isLoading}
      data-testid="button-submit"
      {...props}
    >
      {isLoading ? "Carregando..." : children}
    </Button>
  );
}
