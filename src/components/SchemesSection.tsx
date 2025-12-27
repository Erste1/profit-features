import SchemeCard from "./SchemeCard";
import { 
  Coins, 
  TrendingUp, 
  Laptop, 
  Gamepad2, 
  ShoppingBag, 
  Bot,
  Wallet,
  Users,
  Gift
} from "lucide-react";

const schemes = [
  {
    title: "Арбитраж криптовалют",
    description: "Заработок на разнице курсов между биржами. Пошаговая инструкция для новичков.",
    icon: Coins,
    category: "Крипто",
    difficulty: "medium" as const,
    isFree: false,
    isPremium: true,
  },
  {
    title: "Нейросети для заработка",
    description: "Как использовать ChatGPT и Midjourney для создания контента и продажи услуг.",
    icon: Bot,
    category: "AI",
    difficulty: "easy" as const,
    isFree: true,
  },
  {
    title: "Фриланс с нуля",
    description: "Полный гайд по старту на фриланс-биржах. От регистрации до первых заказов.",
    icon: Laptop,
    category: "Фриланс",
    difficulty: "easy" as const,
    isFree: true,
  },
  {
    title: "Дропшиппинг 2024",
    description: "Актуальная схема продаж без склада. Поставщики, площадки, автоматизация.",
    icon: ShoppingBag,
    category: "E-commerce",
    difficulty: "medium" as const,
    isFree: false,
  },
  {
    title: "Инвестиции для начинающих",
    description: "Безопасные стратегии инвестирования с минимальным капиталом.",
    icon: TrendingUp,
    category: "Инвестиции",
    difficulty: "medium" as const,
    isFree: true,
  },
  {
    title: "Заработок на играх",
    description: "NFT-игры, киберспорт ставки и тестирование игр за деньги.",
    icon: Gamepad2,
    category: "Геймing",
    difficulty: "easy" as const,
    isFree: true,
  },
  {
    title: "Партнёрский маркетинг",
    description: "Высокодоходные партнёрки и стратегии привлечения рефералов.",
    icon: Users,
    category: "Affiliate",
    difficulty: "hard" as const,
    isPremium: true,
  },
  {
    title: "Кэшбэк и бонусы",
    description: "Максимизация выгоды от банковских карт, сервисов и акций.",
    icon: Wallet,
    category: "Кэшбэк",
    difficulty: "easy" as const,
    isFree: true,
  },
  {
    title: "Халява и промокоды",
    description: "Актуальные промокоды, розыгрыши и способы получить товары бесплатно.",
    icon: Gift,
    category: "Бесплатное",
    difficulty: "easy" as const,
    isFree: true,
  },
];

const SchemesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Схемы заработка
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Проверенные методы заработка с пошаговыми инструкциями. 
            От простых до продвинутых стратегий.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["Все", "Бесплатные", "Крипто", "AI", "Фриланс", "Инвестиции"].map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => (
            <div
              key={scheme.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SchemeCard {...scheme} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;
