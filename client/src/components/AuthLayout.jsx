import { Link } from "wouter";

export default function AuthLayout({
  title,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" data-testid="auth-layout">
      <div className="w-full max-w-[400px] text-center">
        <h1 className="text-[28px] font-bold text-foreground mb-2" data-testid="text-title">
          {title}
        </h1>
        <p className="text-muted-foreground mb-5" data-testid="text-subtitle">
          Controle de Estoque
        </p>
        {children}
        {footerText && footerLinkText && footerLinkHref && (
          <p className="mt-4 text-sm text-muted-foreground" data-testid="text-footer">
            {footerText}{" "}
            <Link
              href={footerLinkHref}
              className="text-primary hover:underline"
              data-testid="link-footer"
            >
              {footerLinkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
