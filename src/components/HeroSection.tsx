import { Terminal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(160_100%_50%_/_0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(200_100%_50%_/_0.05)_0%,_transparent_40%)]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(160 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 100% 50%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Terminal prompt */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 font-mono text-sm">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">$</span>
          <span className="text-foreground">./start_earning.sh</span>
          <span className="w-2 h-4 bg-primary animate-pulse" />
        </div>

        {/* Main title */}
        <h1 className="font-mono text-5xl md:text-7xl font-bold mb-4">
          <span className="text-foreground">НЕ </span>
          <span className="text-primary text-glow">БАГ</span>
          <span className="text-foreground">, А </span>
          <span className="text-secondary text-glow-secondary">ФИЧА</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Коллекция лучших схем заработка и бесплатных методов для тех, 
          кто хочет <span className="text-primary">монетизировать</span> своё время
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-primary text-glow">50+</div>
            <div className="text-sm text-muted-foreground">Схем</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-secondary text-glow-secondary">25+</div>
            <div className="text-sm text-muted-foreground">Бесплатных</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-accent text-glow-accent">1K+</div>
            <div className="text-sm text-muted-foreground">Пользователей</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="font-mono group">
            <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
            Смотреть схемы
          </Button>
          <Button size="lg" variant="outline" className="font-mono border-primary/50 text-primary hover:bg-primary/10">
            Бесплатные схемы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
