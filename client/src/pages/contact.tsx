import { useLanguage } from "@/hooks/use-language";
import { Phone, User, Mail, MessageCircle, ExternalLink, Download, Facebook, Instagram, Star, Medal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { language } = useLanguage();

  const getColorClasses = (color: string) => {
    const colorMap = {
      'yellow-600': {
        border: 'border-yellow-600',
        bg: 'bg-yellow-600/10',
        text: 'text-yellow-600',
        bgSolid: 'bg-yellow-600',
        hover: 'hover:bg-yellow-600/90'
      },
      'gray-600': {
        border: 'border-gray-600',
        bg: 'bg-gray-600/10',
        text: 'text-gray-600',
        bgSolid: 'bg-gray-600',
        hover: 'hover:bg-gray-600/90'
      },
      'yellow-700': {
        border: 'border-yellow-700',
        bg: 'bg-yellow-700/10',
        text: 'text-yellow-700',
        bgSolid: 'bg-yellow-700',
        hover: 'hover:bg-yellow-700/90'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['yellow-600'];
  };

  const sponsorshipTier = ({ title, price, features, color, icon: Icon }: { title: string; price: string; features: string[]; color: string; icon: any }) => {
    const colors = getColorClasses(color);
    return (
      <div className={`bg-white p-8 rounded-xl shadow-lg text-center border-t-4 ${colors.border}`}>
        <div className={`w-16 h-16 ${colors.bg} rounded-full mx-auto mb-4 flex items-center justify-center`}>
          <Icon className={`${colors.text} text-2xl h-8 w-8`} />
        </div>
        <h3 className="text-2xl font-bold text-cultural-maroon mb-3">{title}</h3>
        <p className={`text-3xl font-bold ${colors.text} mb-4`}>{price}</p>
        <ul className="text-left space-y-2 text-muted-foreground mb-6">
          {features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
        <Button 
          className={`${colors.bgSolid} text-white ${colors.hover} w-full`}
          data-testid={`button-sponsor-${title.toLowerCase().replace(' ', '-')}`}
        >
          Choose Plan
        </Button>
      </div>
    );
  };

  return (
    <div>
      {/* Contact Hero */}
      <section className="py-16 bg-gradient-to-br from-cultural-saffron/10 via-cultural-gold/5 to-cultural-maroon/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cultural-maroon mb-4">Contact & Sponsorship</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us to be part of our cultural celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-cultural-maroon mb-8">
                  <Phone className="inline mr-3 h-8 w-8" />Contact Information
                </h2>
                
                <div className="space-y-6">
                  {/* SPOC Details */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cultural-saffron">
                    <h3 className="text-xl font-bold text-cultural-saffron mb-4">Single Point of Contact (SPOC)</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <User className="text-cultural-maroon h-5 w-5" />
                        <span className="font-semibold">Shri. Rajesh Patil (President)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="text-cultural-green h-5 w-5" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="text-green-600 h-5 w-5" />
                        <span>+91 98765 43210</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cultural-green">
                    <h3 className="text-xl font-bold text-cultural-green mb-4">Event Coordination</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <User className="text-cultural-maroon h-5 w-5" />
                        <span className="font-semibold">Shri. Amit Kulkarni (Secretary)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="text-cultural-green h-5 w-5" />
                        <span>+91 87654 32109</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="text-cultural-saffron h-5 w-5" />
                        <span>events@adarshmitramandal.org</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp Group */}
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="text-xl font-bold text-green-700 mb-4">
                      <MessageCircle className="inline mr-2 h-6 w-6" />Join Our WhatsApp Group
                    </h3>
                    <p className="text-muted-foreground mb-4">Stay updated with all our events and announcements</p>
                    <Button 
                      className="bg-green-600 text-white hover:bg-green-700"
                      data-testid="button-whatsapp-group"
                      asChild
                    >
                      <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Join Group
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Quick Forms & Links */}
              <div>
                <h2 className="text-3xl font-bold text-cultural-maroon mb-8">
                  <ExternalLink className="inline mr-3 h-8 w-8" />Quick Links & Forms
                </h2>
                
                <div className="space-y-6">
                  {/* Registration Forms */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cultural-saffron">
                    <h3 className="text-xl font-bold text-cultural-saffron mb-4">Registration Forms</h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-between p-3 hover:bg-cultural-saffron/10"
                        data-testid="link-kurta-registration"
                        asChild
                      >
                        <a href="https://forms.google.com/kurta-registration" target="_blank" rel="noopener noreferrer">
                          <span className="font-medium">Kurta/ID Registration</span>
                          <ExternalLink className="text-cultural-saffron h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-between p-3 hover:bg-cultural-green/10"
                        data-testid="link-volunteer-registration"
                        asChild
                      >
                        <a href="https://forms.google.com/volunteer-registration" target="_blank" rel="noopener noreferrer">
                          <span className="font-medium">Volunteer Registration</span>
                          <ExternalLink className="text-cultural-green h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-between p-3 hover:bg-cultural-maroon/10"
                        data-testid="link-donation-form"
                        asChild
                      >
                        <a href="https://forms.google.com/donation-form" target="_blank" rel="noopener noreferrer">
                          <span className="font-medium">Donation Form</span>
                          <ExternalLink className="text-cultural-maroon h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Button
                        size="icon"
                        className="bg-blue-600 hover:bg-blue-700"
                        data-testid="link-social-facebook"
                        asChild
                      >
                        <a href="https://facebook.com/adarshmitramandal" target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        className="bg-pink-600 hover:bg-pink-700"
                        data-testid="link-social-instagram"
                        asChild
                      >
                        <a href="https://instagram.com/adarshmitramandal" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        className="bg-green-600 hover:bg-green-700"
                        data-testid="link-social-whatsapp"
                        asChild
                      >
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-16 bg-gradient-to-br from-cultural-cream to-cultural-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cultural-maroon mb-4">
                <Star className="inline mr-3 h-8 w-8" />Sponsorship Opportunities
              </h2>
              <p className="text-lg text-muted-foreground">Partner with us to support cultural preservation and community development</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {sponsorshipTier({
                title: "Gold Sponsor",
                price: "₹50,000",
                features: [
                  "Prime banner placement",
                  "Stage announcement",
                  "Social media promotion",
                  "Event photography"
                ],
                color: "yellow-600",
                icon: Star
              })}
              
              {sponsorshipTier({
                title: "Silver Sponsor",
                price: "₹25,000",
                features: [
                  "Banner display",
                  "Program mention",
                  "Social media feature",
                  "Event access"
                ],
                color: "gray-600",
                icon: Medal
              })}
              
              {sponsorshipTier({
                title: "Bronze Sponsor",
                price: "₹10,000",
                features: [
                  "Logo placement",
                  "Program listing",
                  "Digital promotion",
                  "Community recognition"
                ],
                color: "yellow-700",
                icon: Award
              })}
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-cultural-saffron text-white hover:bg-cultural-saffron/90 px-8 py-4 text-lg font-semibold"
                data-testid="button-download-brochure"
                asChild
              >
                <a href="/assets/sponsorship-brochure.pdf" download="Adarsh-Mitra-Mandal-Sponsorship-Brochure.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Sponsorship Brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
