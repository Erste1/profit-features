import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SchemeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  isFree?: boolean;
  isPremium?: boolean;
}

const difficultyConfig = {
  easy: { label: "Легко", className: "bg-primary/20 text-primary border-primary/30" },
  medium: { label: "Средне", className: "bg-secondary/20 text-secondary border-secondary/30" },
  hard: { label: "Сложно", className: "bg-accent/20 text-accent border-accent/30" },
};

const SchemeCard = ({
  title,
  description,
  icon: Icon,
  category,
  difficulty,
  isFree = false,
  isPremium = false,
}: SchemeCardProps) => {
  const diffConfig = difficultyConfig[difficulty];

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Premium/Free badge */}
      {(isFree || isPremium) && (
        <div className="absolute top-3 right-3">
          {isFree && (
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-mono text-xs">
              FREE
            </Badge>
          )}
          {isPremium && (
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 font-mono text-xs">
              VIP
            </Badge>
          )}
        </div>
      )}

      <CardHeader className="relative pb-2">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="font-mono text-base text-foreground group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative pt-0">
        <CardDescription className="text-sm text-foreground/70 mb-3 line-clamp-2">
          {description}
        </CardDescription>
        
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={`text-xs font-mono ${diffConfig.className}`}>
            {diffConfig.label}
          </Badge>
          
          <span className="text-xs text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            [ ОТКРЫТЬ → ]
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchemeCard;
