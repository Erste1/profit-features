import { Zap } from "lucide-react";

interface NewsItem {
  id: number;
  text: string;
  isNew?: boolean;
}

const newsItems: NewsItem[] = [
  { id: 1, text: "🔥 Новая схема: заработок на нейросетях без вложений", isNew: true },
  { id: 2, text: "💰 Обновлена схема арбитража криптовалют" },
  { id: 3, text: "🎁 Добавлены 5 бесплатных схем для новичков" },
  { id: 4, text: "⚡ Эксклюзив: пассивный доход на автомате", isNew: true },
  { id: 5, text: "📈 Схема заработка на дропшиппинге 2024" },
  { id: 6, text: "🚀 Партнёрские программы с высоким ROI" },
];

const NewsTicker = () => {
  return (
    <div className="relative overflow-hidden border-y border-border bg-muted/30 py-3">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 flex items-center gap-2 border-r border-border mr-4">
          <Zap className="w-4 h-4 text-primary animate-pulse" />
          <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wider">
            Новости
          </span>
        </div>
        
        <div className="flex animate-ticker">
          {[...newsItems, ...newsItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center whitespace-nowrap px-8"
            >
              {item.isNew && (
                <span className="mr-2 px-2 py-0.5 text-xs font-mono font-bold bg-primary/20 text-primary rounded border border-primary/30">
                  NEW
                </span>
              )}
              <span className="text-sm text-foreground/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
