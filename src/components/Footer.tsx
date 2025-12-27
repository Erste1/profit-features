import { Bug, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/30">
                <Bug className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono font-bold text-lg">
                <span className="text-foreground">НЕ_БАГ</span>
                <span className="text-primary">_А_ФИЧА</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Коллекция проверенных схем заработка и бесплатных методов. 
              Делимся только тем, что работает.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/50 border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/50 border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono font-semibold text-sm mb-4 text-foreground">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Все схемы
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Бесплатные
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  VIP доступ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Новости
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-mono font-semibold text-sm mb-4 text-foreground">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2024 НЕ_БАГ_А_ФИЧА. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">&gt;</span> Это не финансовый совет
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
