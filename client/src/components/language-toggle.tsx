import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'bg-cultural-saffron hover:bg-cultural-saffron/90' : ''}
        data-testid="button-language-en"
      >
        EN
      </Button>
      <Button
        variant={language === 'mr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('mr')}
        className={`font-devanagari ${language === 'mr' ? 'bg-cultural-saffron hover:bg-cultural-saffron/90' : ''}`}
        data-testid="button-language-mr"
      >
        मर
      </Button>
    </div>
  );
}
