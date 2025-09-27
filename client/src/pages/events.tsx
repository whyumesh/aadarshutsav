import { useLanguage } from "@/hooks/use-language";
import { Star, Calendar, MapPin, Clock, Music, Utensils, Palette, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Events() {
  const { language } = useLanguage();

  const eventCard = ({ title, titleMr, description, date, icon: Icon, color }: { title: string; titleMr: string; description: string; date: string; icon: any; color: string }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-start space-x-4">
        <div className={`w-16 h-16 bg-${color}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
          <Icon className={`text-${color} text-2xl h-8 w-8`} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-cultural-maroon mb-2">{title}</h3>
          <p className={`font-devanagari text-${color} font-semibold mb-3`}>{titleMr}</p>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className={`text-sm text-${color} font-medium`}>
            <Calendar className="w-4 h-4 inline mr-2" />
            {date}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Events Hero */}
      <section className="py-16 bg-gradient-to-br from-cultural-saffron/10 via-cultural-gold/5 to-cultural-maroon/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cultural-maroon mb-4">Our Events</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the richness of Maharashtrian culture through our carefully curated celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Navratri Utsav 2025 Details */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Event Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-cultural-saffron text-white px-6 py-2 rounded-full font-semibold mb-4">
                <Star className="w-4 h-4 mr-2" />
                Featured Event
              </div>
              <h2 className="text-4xl font-bold text-cultural-maroon mb-4 font-devanagari">नवरात्री उत्सव 2025</h2>
              <h3 className="text-3xl font-semibold text-cultural-saffron mb-6">Navratri Utsav 2025</h3>
            </div>
            
            {/* Main Event Card */}
            <div className="festival-card rounded-2xl p-8 mb-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Colorful Navratri celebration with traditional dancers" 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
                <div className="space-y-6">
                  <div className="bg-cultural-maroon/10 p-6 rounded-xl border-l-4 border-cultural-maroon">
                    <h4 className="text-2xl font-bold text-cultural-maroon mb-2 font-devanagari">महाराष्ट्राची लोककला</h4>
                    <p className="text-lg font-semibold text-cultural-saffron">Celebrating Maharashtrian Folk Arts</p>
                    <p className="text-muted-foreground mt-2">A grand showcase of traditional dance, music, and cultural performances</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center border border-cultural-saffron/20">
                      <Calendar className="text-cultural-saffron text-2xl mx-auto mb-2 h-8 w-8" />
                      <p className="font-semibold text-cultural-maroon">Start Date</p>
                      <p className="text-lg font-bold text-cultural-saffron">22-09-2025</p>
                      <p className="text-sm text-muted-foreground">Monday</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center border border-cultural-green/20">
                      <Calendar className="text-cultural-green text-2xl mx-auto mb-2 h-8 w-8" />
                      <p className="font-semibold text-cultural-maroon">End Date</p>
                      <p className="text-lg font-bold text-cultural-green">02-10-2025</p>
                      <p className="text-sm text-muted-foreground">Thursday</p>
                    </div>
                  </div>
                  
                  <div className="bg-cultural-green/10 p-6 rounded-xl border border-cultural-green/20">
                    <p className="font-semibold text-cultural-green mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />Venue Details
                    </p>
                    <p className="text-lg font-semibold text-cultural-maroon">Plot 31, Sector 18</p>
                    <p className="text-lg">Kamothe, Panvel</p>
                    <p className="text-sm text-muted-foreground mt-2">Easily accessible by local transport</p>
                  </div>
                  
                  <div className="bg-cultural-gold/10 p-4 rounded-xl border border-cultural-gold/30">
                    <p className="text-center text-lg font-semibold text-cultural-maroon">
                      <Clock className="w-4 h-4 inline mr-2" />11 Days of Celebration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Event Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cultural-saffron">
                <h4 className="text-xl font-bold text-cultural-saffron mb-3">
                  <Music className="w-5 h-5 inline mr-2" />Traditional Performances
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Lavani Dance</li>
                  <li>• Dhol Tasha Pathak</li>
                  <li>• Folk Songs</li>
                  <li>• Classical Dance</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cultural-green">
                <h4 className="text-xl font-bold text-cultural-green mb-3">
                  <Utensils className="w-5 h-5 inline mr-2" />Cultural Cuisine
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Traditional Maharashtrian Thali</li>
                  <li>• Festive Sweets</li>
                  <li>• Street Food Stalls</li>
                  <li>• Special Navratri Menu</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cultural-maroon">
                <h4 className="text-xl font-bold text-cultural-maroon mb-3">
                  <Palette className="w-5 h-5 inline mr-2" />Art & Crafts
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Warli Painting Exhibition</li>
                  <li>• Handloom Display</li>
                  <li>• Pottery Demonstration</li>
                  <li>• Craft Workshop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Events */}
      <section className="py-16 bg-gradient-to-br from-cultural-cream to-cultural-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cultural-maroon mb-4">Other Annual Events</h2>
            <p className="text-lg text-muted-foreground">Year-round celebrations of our rich cultural heritage</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {eventCard({
              title: "Ganesh Jayanti Mahaprasad",
              titleMr: "गणेश जयंती महाप्रसाद",
              description: "Traditional celebration of Lord Ganesha's birthday with community feast and prayers",
              date: "February 2025",
              icon: Music,
              color: "cultural-saffron"
            })}
            
            {eventCard({
              title: "Janmashtami Dahi Handi",
              titleMr: "जन्माष्टमी दही हांडी",
              description: "Exciting dahi handi competition with traditional celebrations and cultural programs",
              date: "August 2025",
              icon: Music,
              color: "cultural-green"
            })}
            
            {eventCard({
              title: "ABPL & Kulswamini Chashak",
              titleMr: "ABPL & कुलस्वामिनी चषक",
              description: "Annual sports tournament featuring cricket, football, and other competitive games",
              date: "March-April 2025",
              icon: Music,
              color: "cultural-maroon"
            })}
            
            {eventCard({
              title: "Haripath Sessions",
              titleMr: "हरिपाठ",
              description: "Regular devotional singing sessions and spiritual gatherings for the community",
              date: "Monthly",
              icon: Music,
              color: "purple-600"
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cultural-maroon mb-4">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground">Memories from our past celebrations</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              <div className="aspect-square bg-cultural-saffron/5 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src="https://pixabay.com/get/g5cc0a976c4a67f4383c61d738f63b4d2c3431eb1339f4eebaa2e1a4c2bf0377b0277a4ccbe123b10b3b01b1f30ebfdca20f7c500d513371dc3decb0d13d7f4c6_1280.jpg" 
                  alt="Navratri dance performance" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="aspect-square bg-cultural-green/5 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Traditional cultural celebration" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="aspect-square bg-cultural-maroon/5 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Community gathering event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="aspect-square bg-yellow-50 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Festival decorations and lights" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">View more photos from our events</p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-cultural-saffron text-white hover:bg-cultural-saffron/90"
                  data-testid="link-google-photos"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Google Photos
                </Button>
                <Button 
                  className="bg-cultural-green text-white hover:bg-cultural-green/90"
                  data-testid="link-google-drive"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Google Drive
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
