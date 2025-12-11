import { forwardRef } from "react";
import { Input } from "@/components/ui/input";

const FormInput = forwardRef(({ label, className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      className={`bg-card border-0 rounded-lg p-3 h-12 text-base placeholder:text-muted-foreground ${className || ""}`}
      placeholder={label}
      data-testid={`input-${props.name || props.type || "text"}`}
      {...props}
    />
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
