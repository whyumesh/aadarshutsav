import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Calendar, Phone, HandHeart, Star, MapPin, Clock } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cultural-saffron/20 via-cultural-gold/10 to-cultural-maroon/20"></div>
        <div 
          className="relative bg-cover bg-center min-h-[70vh] flex items-center"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 107, 53, 0.3), rgba(139, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {t('hero.welcome')} <span className="text-cultural-gold">Adarsh Mitra Mandal</span>
                </h1>
                <p className="text-2xl md:text-3xl font-semibold font-devanagari mb-6 drop-shadow-md">
                  {language === 'mr' ? 'परंपरेची ओळख, लोककलेचा सन्मान' : t('hero.tagline')}
                </p>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto drop-shadow-sm">
                  {t('hero.description')}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-cultural-saffron hover:bg-cultural-saffron/90 text-white px-8 py-3 text-lg font-semibold shadow-lg"
                  onClick={() => setLocation('/events')}
                  data-testid="button-hero-events"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('hero.viewEvents')}
                </Button>
                <Button 
                  className="bg-cultural-maroon hover:bg-cultural-maroon/90 text-white px-8 py-3 text-lg font-semibold shadow-lg"
                  onClick={() => setLocation('/contact')}
                  data-testid="button-hero-sponsorship"
                >
                  <HandHeart className="w-5 h-5 mr-2" />
                  {t('hero.sponsorship')}
                </Button>
                <Button 
                  className="bg-cultural-green hover:bg-cultural-green/90 text-white px-8 py-3 text-lg font-semibold shadow-lg"
                  onClick={() => setLocation('/contact')}
                  data-testid="button-hero-contact"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('hero.contactUs')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navratri Utsav 2025 Highlight */}
      <section className="py-16 bg-gradient-to-br from-cultural-cream to-cultural-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cultural-maroon mb-4 font-devanagari">नवरात्री उत्सव 2025</h2>
            <h3 className="text-3xl font-semibold text-cultural-saffron mb-6">{t('navratri.title')}</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('navratri.description')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="festival-card rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/lok_kala.jpeg" 
                    alt="Maharashtrian folk dancers in traditional Lavani and Koli attire celebrating cultural heritage" 
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="bg-cultural-saffron/10 p-6 rounded-xl border-l-4 border-cultural-saffron">
                    <h4 className="text-2xl font-bold text-cultural-maroon mb-2 font-devanagari">महाराष्ट्राची लोककला</h4>
                    <p className="text-lg font-semibold text-cultural-saffron">{t('navratri.theme')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <Calendar className="h-8 w-8 text-cultural-saffron mx-auto mb-2" />
                      <p className="font-semibold text-cultural-maroon">{t('navratri.startDate')}</p>
                      <p className="text-lg">22-09-2025</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <Calendar className="h-8 w-8 text-cultural-green mx-auto mb-2" />
                      <p className="font-semibold text-cultural-maroon">{t('navratri.endDate')}</p>
                      <p className="text-lg">02-10-2025</p>
                    </div>
                  </div>
                  
                  <div className="bg-cultural-green/10 p-4 rounded-xl">
                    <p className="font-semibold text-cultural-green mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      {t('navratri.venue')}
                    </p>
                    <p className="text-lg">{t('navratri.venueDetails')}</p>
                  </div>
                  
                  <div className="bg-cultural-gold/10 p-4 rounded-xl border border-cultural-gold/30">
                    <p className="text-center text-lg font-semibold text-cultural-maroon">
                      <Clock className="w-4 h-4 inline mr-2" />
                      {t('navratri.daysOfCelebration')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cultural-maroon mb-4">{t('getInvolved.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('getInvolved.description')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-cultural-saffron">
              <div className="text-center">
                <div className="w-16 h-16 bg-cultural-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-cultural-saffron text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-cultural-maroon mb-3">{t('getInvolved.upcomingEvents')}</h3>
                <p className="text-muted-foreground mb-6">{t('getInvolved.eventsDesc')}</p>
                <Button 
                  className="bg-cultural-saffron text-white hover:bg-cultural-saffron/90"
                  onClick={() => setLocation('/events')}
                  data-testid="button-view-events"
                >
                  View Events
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-cultural-green">
              <div className="text-center">
                <div className="w-16 h-16 bg-cultural-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="text-cultural-green text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-cultural-maroon mb-3">{t('getInvolved.volunteer')}</h3>
                <p className="text-muted-foreground mb-6">{t('getInvolved.volunteerDesc')}</p>
                <Button 
                  className="bg-cultural-green text-white hover:bg-cultural-green/90"
                  onClick={() => setLocation('/contact')}
                  data-testid="button-join-us"
                >
                  Join Us
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-cultural-maroon">
              <div className="text-center">
                <div className="w-16 h-16 bg-cultural-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-cultural-maroon text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-cultural-maroon mb-3">{t('getInvolved.support')}</h3>
                <p className="text-muted-foreground mb-6">{t('getInvolved.supportDesc')}</p>
                <Button 
                  className="bg-cultural-maroon text-white hover:bg-cultural-maroon/90"
                  onClick={() => setLocation('/contact')}
                  data-testid="button-donate"
                >
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
