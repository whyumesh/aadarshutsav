import { useLanguage } from "@/hooks/use-language";
import { Phone, User, Mail, MessageCircle, ExternalLink, Download, Facebook, Instagram, Star, Medal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { language } = useLanguage();

  const sponsorshipTier = ({ title, price, features, color, icon: Icon }: { title: string; price: string; features: string[]; color: string; icon: any }) => (
    <div className={`bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-${color}`}>
      <div className={`w-16 h-16 bg-${color}/10 rounded-full mx-auto mb-4 flex items-center justify-center`}>
        <Icon className={`text-${color} text-2xl h-8 w-8`} />
      </div>
      <h3 className="text-2xl font-bold text-cultural-maroon mb-3">{title}</h3>
      <p className={`text-3xl font-bold text-${color} mb-4`}>{price}</p>
      <ul className="text-left space-y-2 text-muted-foreground mb-6">
        {features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      <Button 
        className={`bg-${color} text-white hover:bg-${color}/90 w-full`}
        data-testid={`button-sponsor-${title.toLowerCase()}`}
      >
        Choose Plan
      </Button>
    </div>
  );

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
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Join Group
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
                      >
                        <span className="font-medium">Kurta/ID Registration</span>
                        <ExternalLink className="text-cultural-saffron h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-between p-3 hover:bg-cultural-green/10"
                        data-testid="link-volunteer-registration"
                      >
                        <span className="font-medium">Volunteer Registration</span>
                        <ExternalLink className="text-cultural-green h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-between p-3 hover:bg-cultural-maroon/10"
                        data-testid="link-donation-form"
                      >
                        <span className="font-medium">Donation Form</span>
                        <ExternalLink className="text-cultural-maroon h-4 w-4" />
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
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        className="bg-pink-600 hover:bg-pink-700"
                        data-testid="link-social-instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        className="bg-green-600 hover:bg-green-700"
                        data-testid="link-social-whatsapp"
                      >
                        <MessageCircle className="h-5 w-5" />
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
              >
                <Download className="w-5 h-5 mr-2" />
                Download Sponsorship Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
