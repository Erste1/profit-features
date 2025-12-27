import { Bug, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
              <Bug className="w-5 h-5 text-primary" />
            </div>
            <span className="font-mono font-bold text-lg">
              <span className="text-foreground">НЕ_БАГ</span>
              <span className="text-primary">_А_ФИЧА</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              Схемы
            </a>
            <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              Бесплатное
            </a>
            <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              VIP
            </a>
            <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm" className="font-mono">
              Telegram
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                Схемы
              </a>
              <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                Бесплатное
              </a>
              <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                VIP
              </a>
              <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <Button size="sm" className="font-mono w-fit">
                Telegram
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
