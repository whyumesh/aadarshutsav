import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/hooks/use-language";
import { Home, Users, Calendar, Phone } from "lucide-react";

export function Navigation() {
  const [location, setLocation] = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { path: "/", label: t('nav.home'), icon: Home },
    { path: "/about", label: t('nav.about'), icon: Users },
    { path: "/events", label: t('nav.events'), icon: Calendar },
    { path: "/contact", label: t('nav.contact'), icon: Phone },
  ];

  return (
    <nav className="bg-card shadow-lg sticky top-0 z-50 border-b-4 border-cultural-saffron">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 cultural-gradient rounded-full flex items-center justify-center">
              <span className="text-white text-xl">ॐ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-cultural-saffron">Adarsh Mitra Mandal</h1>
              <p className="text-sm text-muted-foreground font-devanagari">परंपरेची ओळख, लोककलेचा सन्मान</p>
            </div>
          </div>
          
          <LanguageToggle />
        </div>
        
        <div className="flex space-x-1 pb-4">
          {navigation.map(({ path, label, icon: Icon }) => (
            <Button
              key={path}
              variant={location === path ? "default" : "ghost"}
              onClick={() => setLocation(path)}
              className={`px-6 py-2 font-medium transition-all ${
                location === path 
                  ? 'cultural-gradient text-white' 
                  : 'hover:bg-muted'
              }`}
              data-testid={`nav-${path.replace('/', '') || 'home'}`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
