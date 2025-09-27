import { useLanguage } from "@/hooks/use-language";
import { History, Eye, Target, User, Users, Trophy, Music, Utensils, Palette } from "lucide-react";

export default function About() {
  const { language } = useLanguage();

  const getColorClasses = (color: string) => {
    const colorMap = {
      'cultural-saffron': {
        border: 'border-cultural-saffron',
        bg: 'bg-cultural-saffron/10',
        text: 'text-cultural-saffron'
      },
      'cultural-green': {
        border: 'border-cultural-green',
        bg: 'bg-cultural-green/10',
        text: 'text-cultural-green'
      },
      'cultural-maroon': {
        border: 'border-cultural-maroon',
        bg: 'bg-cultural-maroon/10',
        text: 'text-cultural-maroon'
      },
      'yellow-600': {
        border: 'border-yellow-600',
        bg: 'bg-yellow-600/10',
        text: 'text-yellow-600'
      },
      'purple-600': {
        border: 'border-purple-600',
        bg: 'bg-purple-600/10',
        text: 'text-purple-600'
      },
      'blue-600': {
        border: 'border-blue-600',
        bg: 'bg-blue-600/10',
        text: 'text-blue-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['cultural-saffron'];
  };

  const committeeMember = ({ name, position, color, icon: Icon }: { name: string; position: string; color: string; icon: any }) => {
    const colors = getColorClasses(color);
    return (
      <div className={`bg-white p-6 rounded-xl shadow-lg text-center border-t-4 ${colors.border}`}>
        <div className={`w-24 h-24 ${colors.bg} rounded-full mx-auto mb-4 flex items-center justify-center`}>
          <Icon className={`${colors.text} text-3xl h-8 w-8`} />
        </div>
        <h3 className="text-xl font-bold text-cultural-maroon mb-2">{position}</h3>
        <p className={`${colors.text} font-semibold`}>{name}</p>
        <p className="text-sm text-muted-foreground mt-2">Leading with dedication</p>
      </div>
    );
  };

  const activityCard = ({ title, titleMr, description, icon: Icon, color }: { title: string; titleMr: string; description: string; icon: any; color: string }) => {
    const colors = getColorClasses(color);
    return (
      <div className="festival-card p-6 rounded-xl">
        <div className="text-center">
          <div className={`w-16 h-16 ${colors.bg} rounded-full mx-auto mb-4 flex items-center justify-center`}>
            <Icon className={`${colors.text} text-2xl h-6 w-6`} />
          </div>
          <h3 className="text-xl font-bold text-cultural-maroon mb-2">{title}</h3>
          <p className={`font-devanagari ${colors.text} font-semibold mb-3`}>{titleMr}</p>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* About Hero */}
      <section className="py-16 bg-gradient-to-br from-cultural-saffron/10 via-cultural-gold/5 to-cultural-maroon/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cultural-maroon mb-4">About Adarsh Mitra Mandal</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to preserving and promoting Maharashtrian culture through community engagement and traditional celebrations
            </p>
          </div>
          
          {/* History Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-8 border-cultural-saffron">
              <h2 className="text-3xl font-bold text-cultural-maroon mb-6">
                <History className="inline mr-3 h-8 w-8" />Our History
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Traditional community gathering in Maharashtra" 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Established with the vision of keeping our rich Maharashtrian traditions alive, Adarsh Mitra Mandal has been a cornerstone of cultural preservation in our community.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    From organizing grand festivals to supporting local artisans, we continue to honor our heritage while adapting to modern times.
                  </p>
                  <div className="bg-cultural-beige p-4 rounded-lg">
                    <p className="font-devanagari text-lg font-semibold text-cultural-maroon">
                      "परंपरेची ओळख, लोककलेचा सन्मान"
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Recognition of tradition, respect for folk art
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cultural-saffron/5 p-8 rounded-xl border border-cultural-saffron/20">
                <h3 className="text-2xl font-bold text-cultural-saffron mb-4">
                  <Eye className="inline mr-3 h-6 w-6" />Our Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading cultural organization that preserves, promotes, and celebrates Maharashtrian traditions while fostering community unity and cultural pride.
                </p>
              </div>
              
              <div className="bg-cultural-green/5 p-8 rounded-xl border border-cultural-green/20">
                <h3 className="text-2xl font-bold text-cultural-green mb-4">
                  <Target className="inline mr-3 h-6 w-6" />Our Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To organize authentic cultural events, support traditional arts, and create opportunities for the community to connect with their roots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cultural-maroon mb-4">Our Committee</h2>
            <p className="text-lg text-muted-foreground">Meet the dedicated individuals leading our cultural mission</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Executive Committee */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {committeeMember({ name: "Shri. Rajesh Patil", position: "President", color: "cultural-saffron", icon: User })}
              {committeeMember({ name: "Smt. Priya Deshmukh", position: "Vice President", color: "cultural-green", icon: User })}
              {committeeMember({ name: "Shri. Amit Kulkarni", position: "Secretary", color: "cultural-maroon", icon: User })}
              {committeeMember({ name: "Shri. Santosh Joshi", position: "Treasurer", color: "yellow-600", icon: User })}
            </div>
            
            {/* Advisors */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-cultural-maroon mb-6 text-center">
                <Users className="inline mr-3 h-6 w-6" />Advisory Board
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-cultural-saffron/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="text-cultural-saffron text-2xl h-8 w-8" />
                  </div>
                  <p className="font-semibold text-cultural-maroon">Dr. Suresh Marathe</p>
                  <p className="text-sm text-muted-foreground">Cultural Advisor</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-cultural-green/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="text-cultural-green text-2xl h-8 w-8" />
                  </div>
                  <p className="font-semibold text-cultural-maroon">Smt. Vandana Kale</p>
                  <p className="text-sm text-muted-foreground">Arts Coordinator</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-cultural-maroon/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="text-cultural-maroon text-2xl h-8 w-8" />
                  </div>
                  <p className="font-semibold text-cultural-maroon">Shri. Prakash Bhosale</p>
                  <p className="text-sm text-muted-foreground">Community Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Activities */}
      <section className="py-16 bg-gradient-to-br from-cultural-cream to-cultural-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cultural-maroon mb-4">Annual Activities</h2>
            <p className="text-lg text-muted-foreground">Celebrating tradition throughout the year</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activityCard({
              title: "Ganesh Jayanti",
              titleMr: "गणेश जयंती महाप्रसाद",
              description: "Celebrating Lord Ganesha's birthday with traditional mahaprasad",
              icon: Music,
              color: "cultural-saffron"
            })}
            
            {activityCard({
              title: "Janmashtami",
              titleMr: "जन्माष्टमी दही हांडी",
              description: "Traditional dahi handi celebration with grand festivities",
              icon: Trophy,
              color: "cultural-green"
            })}
            
            {activityCard({
              title: "Haripath",
              titleMr: "हरिपाठ",
              description: "Devotional singing sessions and spiritual gatherings",
              icon: Music,
              color: "cultural-maroon"
            })}
            
            {activityCard({
              title: "Sports Events",
              titleMr: "क्रीडा स्पर्धा",
              description: "Community sports competitions and fitness activities",
              icon: Trophy,
              color: "yellow-600"
            })}
            
            {activityCard({
              title: "Navratri Utsav",
              titleMr: "नवरात्री उत्सव",
              description: "Nine nights of traditional dance and cultural celebrations",
              icon: Palette,
              color: "purple-600"
            })}
            
            {activityCard({
              title: "Sports Championships",
              titleMr: "ABPL & कुलस्वामिनी चषक",
              description: "Annual sports tournaments and competitions",
              icon: Trophy,
              color: "blue-600"
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
