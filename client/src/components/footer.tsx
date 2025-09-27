import { useLanguage } from "@/hooks/use-language";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-cultural-maroon text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 cultural-gradient rounded-full flex items-center justify-center">
                <span className="text-white">ॐ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Adarsh Mitra Mandal</h3>
                <p className="text-sm font-devanagari opacity-80">परंपरेची ओळख, लोककलेचा सन्मान</p>
              </div>
            </div>
            <p className="text-cultural-beige">
              Preserving Maharashtrian culture through community celebrations and traditional arts.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cultural-beige">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-about">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-events">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-sponsorship">Sponsorship</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-3 mb-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                data-testid="link-social-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-cultural-beige text-sm">
              Plot 31, Sector 18<br />
              Kamothe, Panvel
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-cultural-beige">
          <p>&copy; 2025 Adarsh Mitra Mandal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
