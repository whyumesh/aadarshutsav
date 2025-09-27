export interface Translation {
  [key: string]: string | Translation;
}

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      events: "Events",
      contact: "Contact"
    },
    hero: {
      welcome: "Welcome to",
      tagline: "Recognition of tradition, respect for folk art",
      description: "Celebrating Maharashtrian culture and traditions through community events and festivals",
      viewEvents: "View Events",
      sponsorship: "Sponsorship",
      contactUs: "Contact Us"
    },
    navratri: {
      title: "Navratri Utsav 2025",
      theme: "Celebrating Maharashtrian Folk Arts",
      description: "Join us for the grandest celebration of Navratri featuring traditional Maharashtrian folk arts",
      startDate: "Start Date",
      endDate: "End Date",
      venue: "Venue",
      venueDetails: "Plot 31, Sector 18, Kamothe, Panvel",
      daysOfCelebration: "11 Days of Celebration"
    },
    getInvolved: {
      title: "Get Involved",
      description: "Discover ways to participate in our cultural celebrations",
      upcomingEvents: "Upcoming Events",
      eventsDesc: "Stay updated with our festival calendar and cultural programs",
      volunteer: "Volunteer",
      volunteerDesc: "Join our team and help organize memorable cultural events",
      support: "Support",
      supportDesc: "Contribute to preserving and promoting our cultural heritage"
    }
  },
  mr: {
    nav: {
      home: "मुख्य",
      about: "आमच्याबद्दल",
      events: "कार्यक्रम",
      contact: "संपर्क"
    },
    hero: {
      welcome: "स्वागत आहे",
      tagline: "परंपरेची ओळख, लोककलेचा सन्मान",
      description: "सामुदायिक कार्यक्रम आणि सणांच्या माध्यमातून महाराष्ट्रीय संस्कृती आणि परंपरांचा उत्सव",
      viewEvents: "कार्यक्रम पहा",
      sponsorship: "प्रायोजकत्व",
      contactUs: "संपर्क साधा"
    },
    navratri: {
      title: "नवरात्री उत्सव 2025",
      theme: "महाराष्ट्राची लोककला",
      description: "पारंपारिक महाराष्ट्रीय लोककलेचे वैशिष्ट्य असलेल्या नवरात्रीच्या भव्य उत्सवासाठी आमच्यात सामील व्हा",
      startDate: "प्रारंभ दिनांक",
      endDate: "समाप्ती दिनांक",
      venue: "ठिकाण",
      venueDetails: "प्लॉट 31, सेक्टर 18, कामोठे, पनवेल",
      daysOfCelebration: "11 दिवसांचा उत्सव"
    },
    getInvolved: {
      title: "सहभागी व्हा",
      description: "आमच्या सांस्कृतिक उत्सवांमध्ये सहभागी होण्याचे मार्ग शोधा",
      upcomingEvents: "आगामी कार्यक्रम",
      eventsDesc: "आमच्या सणांच्या कॅलेंडर आणि सांस्कृतिक कार्यक्रमांसह अद्ययावत रहा",
      volunteer: "स्वयंसेवक",
      volunteerDesc: "आमच्या टीममध्ये सामील व्हा आणि संस्मरणीय सांस्कृतिक कार्यक्रम आयोजित करण्यात मदत करा",
      support: "समर्थन",
      supportDesc: "आमच्या सांस्कृतिक वारशाचे जतन आणि प्रचार करण्यात योगदान द्या"
    }
  }
};

export type Language = 'en' | 'mr';
