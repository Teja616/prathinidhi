import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'; 
const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    features: false,
    testimonials: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Animation trigger on component mount
    setIsVisible(prev => ({
      ...prev,
      hero: true
    }));

    // Scroll animations
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutSection = document.getElementById('about-section');
      const featuresSection = document.getElementById('features-section');
      const testimonialsSection = document.getElementById('testimonials-section');

      if (aboutSection && scrollY > aboutSection.offsetTop - window.innerHeight * 0.8) {
        setIsVisible(prev => ({ ...prev, about: true }));
      }
      
      if (featuresSection && scrollY > featuresSection.offsetTop - window.innerHeight * 0.8) {
        setIsVisible(prev => ({ ...prev, features: true }));
      }
      
      if (testimonialsSection && scrollY > testimonialsSection.offsetTop - window.innerHeight * 0.8) {
        setIsVisible(prev => ({ ...prev, testimonials: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languageData = {
    en: {
      heroTitle: "Empowering Citizens through Speech",
      heroText:
        "File legal applications easily using your voice in your language. Powered by BHASHINI, built for Bharat.",
      sectionHeading: "Real-Time Updates",
      login: "Login",
      popupTitle: "Select Your Language",
      startFiling: "Start Filing Now",
      trackApp: "Track Your Application",
      tutorialHeading: "Tutorials & Help",
      tutorial1Title: "Using Voice to Fill Forms",
      tutorial1Desc: "A step-by-step guide to fill forms using speech.",
      tutorial2Title: "Understanding Legal Terms",
      tutorial2Desc: "Simplified explanation of common legal phrases.",
      tutorial3Title: "Tracking Your Application",
      tutorial3Desc: "How to get real-time updates on your submission.",
      footer1: "© 2025 Prathinidhi | A Government of India Initiative",
      footer2: "Made with 🇮🇳 | Designed for every Indian citizen",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      help: "Help & Support",
      aboutTitle: "An Initiative Towards Digital Bharat",
      aboutText: "Prathinidhi bridges the digital divide by enabling citizens to interact with government services in their native language. Our voice-based technology eliminates literacy barriers, making legal processes accessible to all 1.4 billion Indians regardless of education or technological proficiency.",
      featuresTitle: "Why Choose Prathinidhi?",
      feature1Title: "Voice-First Approach",
      feature1Desc: "Complete forms by simply speaking in your language - no typing required.",
      feature2Title: "22 Official Languages",
      feature2Desc: "Full support for all constitutionally recognized Indian languages.",
      feature3Title: "Simplified Legal Process",
      feature3Desc: "Complex procedures made easy with step-by-step guidance and translations.",
      testimonialTitle: "Success Stories",
      testimonial1: "I never filed any government application before because I can't read or write. With Prathinidhi, I filed my pension application just by speaking in my village dialect.",
      testimonial1Author: "Ramesh Kumar, Farmer from Bihar",
      testimonial2: "The voice recognition is incredibly accurate even with my accent. I completed my RTI filing in Tamil in just 10 minutes.",
      testimonial2Author: "Lakshmi N., Teacher from Coimbatore",
      useCaseTitle: "How Prathinidhi Helps",
      useCase1Title: "Rural Communities",
      useCase1Desc: "Breaking literacy barriers for village residents to access government services.",
      useCase2Title: "Senior Citizens",
      useCase2Desc: "Simplified interface for the elderly to file applications without technical knowledge.",
      useCase3Title: "Persons with Disabilities",
      useCase3Desc: "Accessibility features for those with visual or motor impairments.",
      statsTitle: "Our Impact",
      stat1: "15+ Million",
      stat1Label: "Applications Filed",
      stat2: "22",
      stat2Label: "Languages Supported",
      stat3: "98%",
      stat3Label: "User Satisfaction",
      updates: [
        "📌 RTI form in Marathi now available – April 2025",
        "📌 New tutorial launched: \"How to Submit an Affidavit\"",
        "📌 Support for Maithili, Konkani languages coming soon",
        "📌 New feature: Form autofill based on voice prompts",
        "📌 Integration with DigiLocker now live"
      ],
    },
    hi: {
      heroTitle: "भाषा के माध्यम से नागरिकों को सशक्त बनाना",
      heroText:
        "अपनी भाषा में वॉयस का उपयोग करके कानूनी आवेदन पत्र भरें। BHASHINI द्वारा संचालित, भारत के लिए निर्मित।",
      sectionHeading: "वास्तविक समय में अपडेट्स",
      login: "लॉगिन",
      popupTitle: "अपनी भाषा चुनें",
      startFiling: "अभी आवेदन भरें",
      trackApp: "अपने आवेदन को ट्रैक करें",
      tutorialHeading: "ट्यूटोरियल और सहायता",
      tutorial1Title: "फॉर्म भरने के लिए वॉयस का उपयोग करें",
      tutorial1Desc: "वॉयस से फॉर्म भरने की चरण-दर-चरण गाइड।",
      tutorial2Title: "कानूनी शब्दों को समझना",
      tutorial2Desc: "आम कानूनी शब्दों की सरल व्याख्या।",
      tutorial3Title: "अपने आवेदन की ट्रैकिंग",
      tutorial3Desc: "आपके आवेदन की स्थिति को रीयल-टाइम में जानें।",
      footer1: "© 2025 प्रतिनिधि | भारत सरकार की पहल",
      footer2: "🇮🇳 के साथ बनाया गया | हर भारतीय नागरिक के लिए डिज़ाइन किया गया",
      privacy: "गोपनीयता नीति",
      terms: "उपयोग की शर्तें",
      help: "सहायता और समर्थन",
      aboutTitle: "डिजिटल भारत की ओर एक पहल",
      aboutText: "प्रतिनिधि नागरिकों को अपनी मातृभाषा में सरकारी सेवाओं के साथ बातचीत करने में सक्षम बनाकर डिजिटल विभाजन को पाटता है। हमारी आवाज-आधारित तकनीक साक्षरता बाधाओं को समाप्त करती है, जिससे शिक्षा या तकनीकी प्रवीणता की परवाह किए बिना सभी 1.4 अरब भारतीयों के लिए कानूनी प्रक्रियाएं सुलभ हो जाती हैं।",
      featuresTitle: "प्रतिनिधि क्यों चुनें?",
      feature1Title: "आवाज-प्रथम दृष्टिकोण",
      feature1Desc: "बस अपनी भाषा में बोलकर फॉर्म पूरा करें - टाइपिंग की आवश्यकता नहीं है।",
      feature2Title: "22 आधिकारिक भाषाएँ",
      feature2Desc: "सभी संवैधानिक रूप से मान्यता प्राप्त भारतीय भाषाओं के लिए पूर्ण समर्थन।",
      feature3Title: "सरलीकृत कानूनी प्रक्रिया",
      feature3Desc: "चरण-दर-चरण मार्गदर्शन और अनुवाद के साथ जटिल प्रक्रियाओं को आसान बनाया गया।",
      testimonialTitle: "सफलता की कहानियां",
      testimonial1: "मैंने पहले कभी कोई सरकारी आवेदन नहीं भरा क्योंकि मैं पढ़ या लिख नहीं सकता। प्रतिनिधि के साथ, मैंने अपनी ग्रामीण बोली में बात करके अपना पेंशन आवेदन दाखिल किया।",
      testimonial1Author: "रमेश कुमार, बिहार के किसान",
      testimonial2: "आवाज पहचान मेरे उच्चारण के साथ भी अविश्वसनीय रूप से सटीक है। मैंने अपना RTI फाइलिंग तमिल में सिर्फ 10 मिनट में पूरा किया।",
      testimonial2Author: "लक्ष्मी एन., कोयंबटूर से शिक्षिका",
      useCaseTitle: "प्रतिनिधि कैसे मदद करता है",
      useCase1Title: "ग्रामीण समुदाय",
      useCase1Desc: "गाँव के निवासियों के लिए सरकारी सेवाओं तक पहुँचने के लिए साक्षरता बाधाओं को तोड़ना।",
      useCase2Title: "वरिष्ठ नागरिक",
      useCase2Desc: "बुजुर्गों के लिए तकनीकी ज्ञान के बिना आवेदन दाखिल करने के लिए सरलीकृत इंटरफेस।",
      useCase3Title: "विकलांग व्यक्ति",
      useCase3Desc: "दृष्टि या मोटर दोष वाले लोगों के लिए पहुंच सुविधाएं।",
      statsTitle: "हमारा प्रभाव",
      stat1: "15+ मिलियन",
      stat1Label: "दाखिल आवेदन",
      stat2: "22",
      stat2Label: "समर्थित भाषाएँ",
      stat3: "98%",
      stat3Label: "उपयोगकर्ता संतुष्टि",
      updates: [
        "📌 मराठी में अब RTI फॉर्म उपलब्ध – अप्रैल 2025",
        "📌 नया ट्यूटोरियल लॉन्च: \"हलफनामा कैसे जमा करें\"",
        "📌 मैथिली, कोंकणी भाषाओं के लिए जल्द समर्थन",
        "📌 नया फ़ीचर: वॉइस प्रॉम्प्ट के आधार पर फ़ॉर्म ऑटोफिल",
        "📌 डिजिलॉकर के साथ एकीकरण अब लाइव"
      ]
    },
    ta: {
      heroTitle: "மொழி மூலம் குடிமக்களை சக்திவாய்ப்பாக்குதல்",
      heroText:
        "உங்கள் மொழியில் உங்கள் குரலைப் பயன்படுத்தி சட்டப் பணிகளை எளிதாகச் செய்யுங்கள். BHASHINI மூலம் இயக்கப்படுகிறது.",
      sectionHeading: "நேரடி புதுப்பிப்புகள்",
      login: "உள்நுழை",
      popupTitle: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      startFiling: "இப்போதே பதிவுசெய்க",
      trackApp: "உங்கள் விண்ணப்பத்தை கண்காணிக்கவும்",
      tutorialHeading: "உதவிகள் மற்றும் பயிற்சிகள்",
      tutorial1Title: "குரலை பயன்படுத்தி படிவங்களை நிரப்புவது",
      tutorial1Desc: "குரல் வழியாக படிவத்தை நிரப்புவதற்கான வழிகாட்டி.",
      tutorial2Title: "சட்ட சொற்கள் விளக்கம்",
      tutorial2Desc: "வழக்கமான சட்ட சொற்கள் எளிய விளக்கம்.",
      tutorial3Title: "விண்ணப்ப கண்காணிப்பு",
      tutorial3Desc: "உங்கள் விண்ணப்ப நிலையை நேரடியாக அறியுங்கள்.",
      footer1: "© 2025 பிரதிநிதி | இந்திய அரசு முயற்சி",
      footer2: "🇮🇳 உடன் உருவாக்கப்பட்டது | ஒவ்வொரு இந்தியனுக்குமானது",
      privacy: "தனியுரிமைக் கொள்கை",
      terms: "பயன்பாட்டு விதிமுறைகள்",
      help: "உதவி மற்றும் ஆதரவு",
      aboutTitle: "டிஜிட்டல் பாரதத்தை நோக்கிய முயற்சி",
      aboutText: "பிரதிநிதி குடிமக்களை தங்கள் தாய்மொழியில் அரசு சேவைகளுடன் தொடர்பு கொள்ள உதவி டிஜிட்டல் இடைவெளியை குறைக்கிறது. எங்களின் குரல் அடிப்படையிலான தொழில்நுட்பம் எழுத்தறிவு தடைகளை நீக்குகிறது, 1.4 பில்லியன் இந்தியர்களுக்கு கல்வி அல்லது தொழில்நுட்ப திறன் பாராமல் சட்ட நடைமுறைகளை அணுக உதவுகிறது.",
      featuresTitle: "பிரதிநிதியை ஏன் தேர்ந்தெடுக்க வேண்டும்?",
      feature1Title: "குரல்-முதல் அணுகுமுறை",
      feature1Desc: "உங்கள் மொழியில் பேசுவதன் மூலம் படிவங்களை நிரப்புங்கள் - டைப்பிங் தேவையில்லை.",
      feature2Title: "22 அதிகாரப்பூர்வ மொழிகள்",
      feature2Desc: "அரசியலமைப்பு அங்கீகரிக்கப்பட்ட அனைத்து இந்திய மொழிகளுக்கும் முழு ஆதரவு.",
      feature3Title: "எளிமையாக்கப்பட்ட சட்ட நடைமுறை",
      feature3Desc: "படிப்படியான வழிகாட்டுதல் மற்றும் மொழிபெயர்ப்புகளுடன் சிக்கலான நடைமுறைகள் எளிதாக்கப்பட்டன.",
      testimonialTitle: "வெற்றிக் கதைகள்",
      testimonial1: "நான் படிக்கவோ எழுதவோ முடியாததால் முன்பு எந்த அரசாங்க விண்ணப்பத்தையும் தாக்கல் செய்யவில்லை. பிரதிநிதியுடன், எனது கிராம மொழியில் பேசி என் ஓய்வூதிய விண்ணப்பத்தை தாக்கல் செய்தேன்.",
      testimonial1Author: "ரமேஷ் குமார், பீகாரிலிருந்து விவசாயி",
      testimonial2: "குரல் அங்கீகாரம் என் உச்சரிப்புடன் கூட நம்பமுடியாத அளவிற்கு துல்லியமாக உள்ளது. நான் என் RTI தாக்கலை தமிழில் வெறும் 10 நிமிடங்களில் முடித்தேன்.",
      testimonial2Author: "லட்சுமி என்., கோயம்புத்தூரிலிருந்து ஆசிரியை",
      useCaseTitle: "பிரதிநிதி எவ்வாறு உதவுகிறது",
      useCase1Title: "கிராமப்புற சமூகங்கள்",
      useCase1Desc: "கிராமவாசிகள் அரசு சேவைகளை அணுக எழுத்தறிவு தடைகளை உடைத்தல்.",
      useCase2Title: "மூத்த குடிமக்கள்",
      useCase2Desc: "தொழில்நுட்ப அறிவு இல்லாமல் விண்ணப்பங்களை தாக்கல் செய்ய முதியவர்களுக்கான எளிமையான இடைமுகம்.",
      useCase3Title: "மாற்றுத்திறனாளிகள்",
      useCase3Desc: "பார்வை அல்லது மோட்டார் குறைபாடுகள் உள்ளவர்களுக்கான அணுகல் அம்சங்கள்.",
      statsTitle: "எங்கள் தாக்கம்",
      stat1: "15+ மில்லியன்",
      stat1Label: "தாக்கல் செய்யப்பட்ட விண்ணப்பங்கள்",
      stat2: "22",
      stat2Label: "ஆதரிக்கப்படும் மொழிகள்",
      stat3: "98%",
      stat3Label: "பயனர் திருப்தி",
      updates: [
        "📌 மராட்டியில் RTI படிவம் இப்போது கிடைக்கிறது – ஏப்ரல் 2025",
        "📌 புதிய பாடம் வெளியீடு: \"அபிடவிட் சமர்ப்பிப்பது எப்படி\"",
        "📌 மைத்திலி, கொங்கணி மொழிகள் விரைவில் சேர்க்கப்படும்",
        "📌 புதிய அம்சம்: குரல் குறிப்புகள் அடிப்படையில் தானாகப் பூர்த்தி செய்யும் படிவம்",
        "📌 டிஜிலாக்கர் ஒருங்கிணைப்பு இப்போது செயல்பாட்டில் உள்ளது"
      ]
    },
    te: {
      updates: [
        "📌 మరాఠీలో RTI ఫారమ్ ఇప్పుడు అందుబాటులో ఉంది – ఏప్రిల్ 2025",
        "📌 కొత్త ట్యూటోరియల్ ప్రారంభం: \"అఫిడవిట్ ఎలా సమర్పించాలి\"",
        "📌 మైథిలి, కొంకణీ భాషలకు మద్దతు త్వరలో అందుబాటులో ఉంటుంది",
        "📌 కొత్త ఫీచర్: వాయిస్ ప్రాంప్ట్ ఆధారంగా ఫారమ్ ఆటోఫిల్",
        "📌 డిజిలాకర్ ఇంటిగ్రేషన్ ఇప్పుడు లైవ్‌లో ఉంది"
      ],      
      heroTitle: "భాష ద్వారా పౌరులను శక్తివంతం చేయడం",
      heroText:
        "మీ భాషలో మీ వాయిస్ ద్వారా చట్టపరమైన దరఖాస్తులు సులభంగా దాఖలు చేయండి. BHASHINI చేత శక్తివంతం చేయబడింది.",
      sectionHeading: "తక్షణ అప్డేట్లు",
      login: "ప్రవేశించండి",
      popupTitle: "మీ భాషను ఎంచుకోండి",
      startFiling: "ఇప్పుడే దాఖలు చేయండి",
      trackApp: "మీ దరఖాస్తును ట్రాక్ చేయండి",
      tutorialHeading: "సహాయ వీడియోలు & మార్గదర్శకాలు",
      tutorial1Title: "వాయిస్ ఉపయోగించి ఫారమ్ పూరించటం",
      tutorial1Desc: "వాయిస్ ద్వారా ఫారమ్ పూరించేందుకు దశల వారీ గైడ్.",
      tutorial2Title: "చట్టపరమైన పదాలు అర్థం చేసుకోవడం",
      tutorial2Desc: "చట్టపరమైన పదాల సరళ వివరణ.",
      tutorial3Title: "మీ దరఖాస్తును ట్రాక్ చేయడం",
      tutorial3Desc: "రియల్ టైమ్ అప్డేట్స్ ఎలా పొందాలో తెలుసుకోండి.",
      footer1: "© 2025 ప్రతినిధి | భారత ప్రభుత్వ ఉపక్రమం",
      footer2: "🇮🇳 తో రూపొందించబడింది | ప్రతి భారత పౌరునికీ",
      privacy: "గోప్యతా విధానం",
      terms: "వినియోగ నిబంధనలు",
      help: "సహాయం మరియు మద్దతు",
      aboutTitle: "డిజిటల్ భారత్ దిశగా ఒక చొరవ",
      aboutText: "ప్రతినిధి పౌరులకు వారి మాతృభాషలో ప్రభుత్వ సేవలతో సంభాషించే అవకాశం కల్పించడం ద్వారా డిజిటల్ అంతరాన్ని తగ్గిస్తుంది. మా వాయిస్-ఆధారిత సాంకేతికత అక్షరాస్యతా అడ్డంకులను తొలగిస్తుంది, విద్య లేదా సాంకేతిక నైపుణ్యం లేకుండానే 1.4 బిలియన్ భారతీయులందరికీ చట్టపరమైన ప్రక్రియలు అందుబాటులోకి తెస్తుంది.",
      featuresTitle: "ప్రతినిధిని ఎందుకు ఎంచుకోవాలి?",
      feature1Title: "వాయిస్-ఫస్ట్ విధానం",
      feature1Desc: "మీ భాషలో మాట్లాడటం ద్వారా ఫారాలను పూర్తి చేయండి - టైపింగ్ అవసరం లేదు.",
      feature2Title: "22 అధికారిక భాషలు",
      feature2Desc: "రాజ్యాంగపరంగా గుర్తించబడిన అన్ని భారతీయ భాషలకు పూర్తి మద్దతు.",
      feature3Title: "సరళీకృత చట్ట ప్రక్రియ",
      feature3Desc: "దశల వారీ మార్గదర్శకత్వం మరియు అనువాదాలతో క్లిష్టమైన విధానాలు సులభతరం చేయబడ్డాయి.",
      testimonialTitle: "విజయ కథలు",
      testimonial1: "నాకు చదవడం, రాయడం రాదు కాబట్టి నేను ఇంతకు ముందు ఎప్పుడూ ప్రభుత్వ దరఖాస్తు చేయలేదు. ప్రతినిధితో, నా గ్రామ మాండలికంలో మాట్లాడటం ద్వారా నేను నా పెన్షన్ దరఖాస్తును దాఖలు చేశాను.",
      testimonial1Author: "రమేష్ కుమార్, బీహార్ నుండి రైతు",
      testimonial2: "వాయిస్ గుర్తింపు నా యాసతో కూడా నమ్మశక్యం కాని విధంగా ఖచ్చితంగా ఉంది. నేను కేవలం 10 నిమిషాల్లో తెలుగులో నా RTI దాఖలును పూర్తి చేశాను.",
      testimonial2Author: "లక్ష్మి ఎన్., హైదరాబాద్ నుండి ఉపాధ్యాయురాలు",
      useCaseTitle: "ప్రతినిధి ఎలా సహాయపడుతుంది",
      useCase1Title: "గ్రామీణ సమాజాలు",
      useCase1Desc: "ప్రభుత్వ సేవలను యాక్సెస్ చేయడానికి గ్రామ నివాసులకు అక్షరాస్యత అడ్డంకులను తొలగించడం.",
      useCase2Title: "వృద్ధ పౌరులు",
      useCase2Desc: "సాంకేతిక జ్ఞానం లేకుండా దరఖాస్తులు దాఖలు చేయడానికి వృద్ధులకు సరళీకృత ఇంటర్ఫేస్.",
      useCase3Title: "దివ్యాంగులు",
      useCase3Desc: "దృష్టి లేదా మోటార్ లోపాలు ఉన్నవారి కొరకు యాక్సెసిబిలిటీ ఫీచర్లు.",
      statsTitle: "మా ప్రభావం",
      stat1: "15+ మిలియన్",
      stat1Label: "దాఖలు చేసిన దరఖాస్తులు",
      stat2: "22",
      stat2Label: "మద్దతు ఉన్న భాషలు",
      stat3: "98%",
      stat3Label: "వినియోగదారు సంతృప్తి",
    },
    bn: {
      updates: [
        "📌 মারাঠিতে এখন RTI ফর্ম উপলব্ধ – এপ্রিল 2025",
        "📌 নতুন টিউটোরিয়াল চালু হয়েছে: \"কীভাবে হলফনামা জমা দিতে হয়\"",
        "📌 মৈথিলি, কোকণী ভাষার জন্য শীঘ্রই সমর্থন আসছে",
        "📌 নতুন ফিচার: ভয়েস প্রম্পট অনুযায়ী ফর্ম স্বয়ংক্রিয়ভাবে পূরণ",
        "📌 ডিজিলকার ইন্টিগ্রেশন এখন লাইভ"
      ],   
      heroTitle: "ভাষার মাধ্যমে নাগরিকদের ক্ষমতায়ন",
      heroText:
        "আপনার ভাষায় আপনার কণ্ঠস্বর ব্যবহার করে আইনগত আবেদনপত্রগুলি সহজে পূর্ণ করুন। BHASHINI দ্বারা চালিত।",
      sectionHeading: "রিয়েল-টাইম আপডেটস",
      login: "লগইন",
      popupTitle: "আপনার ভাষা নির্বাচন করুন",
      startFiling: "এখনই আবেদন করুন",
      trackApp: "আপনার আবেদন ট্র্যাক করুন",
      tutorialHeading: "সহায়তা ও টিউটোরিয়াল",
      tutorial1Title: "ভয়েস ব্যবহার করে ফর্ম পূরণ",
      tutorial1Desc: "ভয়েসে ফর্ম পূরণের ধাপে ধাপে গাইড।",
      tutorial2Title: "আইনি পরিভাষা বোঝা",
      tutorial2Desc: "সাধারণ আইনি শব্দগুলির সহজ ব্যাখ্যা।",
      tutorial3Title: "আপনার আবেদন ট্র্যাক করা",
      tutorial3Desc: "আপনার জমা দেওয়ার রিয়েল-টাইম আপডেট পান।",
      footer1: "© 2025 প্রতিনিধিত্ব | ভারত সরকারের উদ্যোগ",
      footer2: "🇮🇳 দিয়ে তৈরি | প্রতিটি ভারতীয় নাগরিকের জন্য",
      privacy: "গোপনীয়তা নীতি",
      terms: "ব্যবহারের শর্তাবলী",
      help: "সহায়তা ও সমর্থন",
      aboutTitle: "ডিজিটাল ভারতের দিকে একটি উদ্যোগ",
      aboutText: "প্রতিনিধি দেশের নাগরিকদের তাদের মাতৃভাষায় সরকারি পরিষেবাগুলির সাথে যোগাযোগ করতে সক্ষম করে ডিজিটাল বিভাজন দূর করে। আমাদের ভয়েস-ভিত্তিক প্রযুক্তি সাক্ষরতার বাধা দূর করে, যা শিক্ষা বা প্রযুক্তিগত দক্ষতা নির্বিশেষে সমস্ত ১.৪ বিলিয়ন ভারতীয়ের জন্য আইনি প্রক্রিয়াগুলি অ্যাক্সেসযোগ্য করে তোলে।",
      featuresTitle: "প্রতিনিধি কেন বেছে নেবেন?",
      feature1Title: "ভয়েস-প্রথম পদ্ধতি",
      feature1Desc: "কেবল আপনার ভাষায় কথা বলে ফর্ম পূরণ করুন - কোনো টাইপিং প্রয়োজন নেই।",
      feature2Title: "২২টি অফিসিয়াল ভাষা",
      feature2Desc: "সংবিধান স্বীকৃত সমস্ত ভারতীয় ভাষার জন্য সম্পূর্ণ সমর্থন।",
      feature3Title: "সরলীকৃত আইনি প্রক্রিয়া",
      feature3Desc: "ধাপে ধাপে নির্দেশনা এবং অনুবাদের সাথে জটিল পদ্ধতিগুলি সহজ করা হয়েছে।",
      testimonialTitle: "সাফল্যের গল্প",
      testimonial1: "আমি আগে কখনও কোনো সরকারি আবেদন দাখিল করিনি কারণ আমি পড়তে বা লিখতে পারি না। প্রতিনিধির সাহায্যে, আমি আমার গ্রামের ভাষায় কথা বলে আমার পেনশন আবেদন দাখিল করেছি।",
      testimonial1Author: "রমেশ কুমার, বিহার থেকে কৃষক",
      testimonial2: "ভয়েস রিকগনিশন আমার উচ্চারণের সাথেও অবিশ্বাস্যভাবে নির্ভুল। আমি বাংলায় আমার RTI দাখিল মাত্র ১০ মিনিটে সম্পন্ন করেছি।",
      testimonial2Author: "লক্ষ্মী এন., কলকাতা থেকে শিক্ষিকা",
      useCaseTitle: "প্রতিনিধি কীভাবে সাহায্য করে",
      useCase1Title: "গ্রামীণ সম্প্রদায়",
      useCase1Desc: "গ্রামের বাসিন্দাদের সরকারি পরিষেবাগুলি অ্যাক্সেস করার জন্য সাক্ষরতার বাধা ভাঙা।",
      useCase2Title: "বয়স্ক নাগরিক",
      useCase2Desc: "প্রযুক্তিগত জ্ঞান ছাড়াই বয়স্কদের আবেদন দাখিল করার জন্য সরলীকৃত ইন্টারফেস।",
      useCase3Title: "প্রতিবন্ধী ব্যক্তি",
      useCase3Desc: "দৃষ্টি বা মোটর প্রতিবন্ধীদের জন্য অ্যাক্সেসিবিলিটি বৈশিষ্ট্য।",
      statsTitle: "আমাদের প্রভাব",
      stat1: "১৫+ মিলিয়ন",
      stat1Label: "দাখিল করা আবেদন",
      stat2: "২২",
      stat2Label: "সমর্থিত ভাষা",
      stat3: "৯৮%",
      stat3Label: "ব্যবহারকারী সন্তুষ্টি",
    },
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // Animation classes
  const getAnimationClass = (sectionName) => {
    return isVisible[sectionName] ? styles.fadeInVisible : styles.fadeInHidden;
  };

  return (
    <main style={styles.main}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logoSection}>
            <img src="/indian-emblem.png" alt="Indian Emblem" style={styles.logo} />
            <img src="/prathinidhi.png" alt="Emblem" style={styles.logo} />
            <div>
              <h1 style={styles.title}>Prathinidhi</h1>
              <p style={styles.subtitle}>
                राष्ट्रीय बहुभाषी विधिक फॉर्म पोर्टल | National Legal Form Portal
              </p>
            </div>
          </div>
          <div style={styles.rightNav}>
            <select
              style={styles.languageSelect}
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="bn">বাংলা</option>
            </select>
            <button 
              style={styles.loginBtn} 
              onClick={() => navigate(`/login?lang=${selectedLanguage}`)}
            >
              {languageData[selectedLanguage].login}
            </button>
          </div>
        </div>
      </header>

      {/* Language Selection Pop-Up */}
      {isPopupOpen && (
        <div style={styles.languagePopup}>
          <div style={styles.popupContent}>
            <h2 style={styles.popupTitle}>
              {languageData[selectedLanguage].popupTitle}
            </h2>
            <div style={styles.languageButtons}>
              {["en", "hi", "ta", "te", "bn"].map((lang) => (
                <button
                  key={lang}
                  style={{
                    ...styles.languageButton,
                    transform: `scale(1)`,
                    transition: 'transform 0.3s ease',
                    ':hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setIsPopupOpen(false);
                  }}
                >
                  {lang === "en"
                    ? "English"
                    : lang === "hi"
                    ? "हिंदी"
                    : lang === "ta"
                    ? "தமிழ்"
                    : lang === "te"
                    ? "తెలుగు"
                    : "বাংলা"}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Animation */}
      <section style={{...styles.hero, ...styles.fadeInSection, opacity: isVisible.hero ? 1 : 0}}>
        <div style={styles.heroContent}>
          <div style={styles.heroTextBox}>
            <h2 style={styles.heroTitle}>
              {languageData[selectedLanguage].heroTitle}
            </h2>
            <p style={styles.heroText}>
              {languageData[selectedLanguage].heroText}
            </p>

            <div style={styles.heroButtons}>
              <button
                style={styles.primaryBtn}
                onClick={() => navigate(`/login?lang=${selectedLanguage}`)}
              >
                {languageData[selectedLanguage].startFiling}
              </button>
              <button
                style={styles.secondaryBtn}
                onClick={() => navigate(`/login?lang=${selectedLanguage}`)}
              >
                {languageData[selectedLanguage].trackApp}
              </button>
            </div>
          </div>
          <img src="/justice.jpg" alt="Justice" style={styles.heroImage} />
        </div>
      </section>

      {/* Updates Section with Scrolling Animation */}
<section className="updates">
  <h3 className="section-heading">
    {languageData[selectedLanguage].sectionHeading}
  </h3>
  <div className="update-scroll-container">
    <ul className="update-list-animated">
      {languageData[selectedLanguage].updates.map((item, index) => (
        <li key={index} className="update-item">{item}</li>
      ))}
      {/* Duplicate items for seamless scrolling */}
      {languageData[selectedLanguage].updates.map((item, index) => (
        <li key={`duplicate-${index}`} className="update-item">{item}</li>
      ))}
    </ul>
  </div>
</section>


      {/* About Section - NEW */}
      <section id="about-section" style={{...styles.about, ...styles.fadeInSection, opacity: isVisible.about ? 1 : 0}}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>{languageData[selectedLanguage].aboutTitle}</h2>
          <div style={styles.aboutContent}>
            <div style={styles.aboutText}>
              <p style={styles.paragraph}>{languageData[selectedLanguage].aboutText}</p>
              
              {/* Stats Row */}
              <div style={styles.statsRow}>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>{languageData[selectedLanguage].stat1}</div>
                  <div style={styles.statLabel}>{languageData[selectedLanguage].stat1Label}</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>{languageData[selectedLanguage].stat2}</div>
                  <div style={styles.statLabel}>{languageData[selectedLanguage].stat2Label}</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>{languageData[selectedLanguage].stat3}</div>
                  <div style={styles.statLabel}>{languageData[selectedLanguage].stat3Label}</div>
                </div>
              </div>
            </div>
            <div style={styles.aboutImageContainer}>
              <img src="/digital-india.png" alt="Digital India" style={styles.aboutImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - NEW */}
      <section id="features-section" style={{...styles.features, ...styles.fadeInSection, opacity: isVisible.features ? 1 : 0}}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>{languageData[selectedLanguage].featuresTitle}</h2>
          <div style={styles.featuresGrid}>
            <FeatureCard
              icon="🎙️"
              title={languageData[selectedLanguage].feature1Title}
              description={languageData[selectedLanguage].feature1Desc}
            />
            <FeatureCard
              icon="🗣️"
              title={languageData[selectedLanguage].feature2Title}
              description={languageData[selectedLanguage].feature2Desc}
            />
            <FeatureCard
              icon="📝"
              title={languageData[selectedLanguage].feature3Title}
              description={languageData[selectedLanguage].feature3Desc}
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section - NEW */}
      <section style={styles.useCases}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>{languageData[selectedLanguage].useCaseTitle}</h2>
          <div style={styles.useCasesGrid}>
            <div style={styles.useCaseCard}>
              <div style={styles.useCaseIcon}>👨‍🌾</div>
              <h3 style={styles.useCaseTitle}>{languageData[selectedLanguage].useCase1Title}</h3>
              <p style={styles.useCaseDesc}>{languageData[selectedLanguage].useCase1Desc}</p>
            </div>
            <div style={styles.useCaseCard}>
              <div style={styles.useCaseIcon}>👵</div>
              <h3 style={styles.useCaseTitle}>{languageData[selectedLanguage].useCase2Title}</h3>
              <p style={styles.useCaseDesc}>{languageData[selectedLanguage].useCase2Desc}</p>
            </div>
            <div style={styles.useCaseCard}>
              <div style={styles.useCaseIcon}>♿</div>
              <h3 style={styles.useCaseTitle}>{languageData[selectedLanguage].useCase3Title}</h3>
              <p style={styles.useCaseDesc}>{languageData[selectedLanguage].useCase3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section id="testimonials-section" style={{...styles.testimonials, ...styles.fadeInSection, opacity: isVisible.testimonials ? 1 : 0}}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>{languageData[selectedLanguage].testimonialTitle}</h2>
          <div style={styles.testimonialGrid}>
            <div style={styles.testimonialCard}>
              <div style={styles.quoteMark}>"</div>
              <p style={styles.testimonialText}>{languageData[selectedLanguage].testimonial1}</p>
              <p style={styles.testimonialAuthor}>{languageData[selectedLanguage].testimonial1Author}</p>
            </div>
            <div style={styles.testimonialCard}>
              <div style={styles.quoteMark}>"</div>
              <p style={styles.testimonialText}>{languageData[selectedLanguage].testimonial2}</p>
              <p style={styles.testimonialAuthor}>{languageData[selectedLanguage].testimonial2Author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section style={styles.tutorials}>
        <h3 style={styles.sectionHeading}>
          {languageData[selectedLanguage].tutorialHeading}
        </h3>
        <div style={styles.tutorialsGrid}>
          <FeatureCard
            icon="🎬"
            title={languageData[selectedLanguage].tutorial1Title}
            description={languageData[selectedLanguage].tutorial1Desc}
          />
          <FeatureCard
            icon="📚"
            title={languageData[selectedLanguage].tutorial2Title}
            description={languageData[selectedLanguage].tutorial2Desc}
          />
          <FeatureCard
            icon="📱"
            title={languageData[selectedLanguage].tutorial3Title}
            description={languageData[selectedLanguage].tutorial3Desc}
          />
        </div>
      </section>

      {/* Call to Action - NEW */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>BHASHINI + Prathinidhi</h2>
          <p style={styles.ctaText}>Experience the power of AI-driven language translation for legal processes</p>
          <button 
            style={styles.ctaButton}
            onClick={() => navigate(`/login?lang=${selectedLanguage}`)}
          >
            {languageData[selectedLanguage].startFiling}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>
            <img src="/prathinidhi-light.png" alt="Prathinidhi" style={styles.footerLogoImg} />
            <p>{languageData[selectedLanguage].footer1}</p>
            <p>{languageData[selectedLanguage].footer2}</p>
          </div>
          <div style={styles.footerLinks}>
            <div style={styles.footerLinkColumn}>
              <h4 style={styles.footerLinkTitle}>Quick Links</h4>
              <a href="/about" style={styles.footerLink}>About</a>
              <a href="/services" style={styles.footerLink}>Services</a>
              <a href="/contact" style={styles.footerLink}>Contact</a>
            </div>
            <div style={styles.footerLinkColumn}>
              <h4 style={styles.footerLinkTitle}>Legal</h4>
              <a href="/privacy" style={styles.footerLink}>{languageData[selectedLanguage].privacy}</a>
              <a href="/terms" style={styles.footerLink}>{languageData[selectedLanguage].terms}</a>
              <a href="/help" style={styles.footerLink}>{languageData[selectedLanguage].help}</a>
            </div>
            <div style={styles.footerLinkColumn}>
              <h4 style={styles.footerLinkTitle}>Connect</h4>
              <a href="https://twitter.com/prathinidhi" style={styles.footerLink}>Twitter</a>
              <a href="https://facebook.com/prathinidhi" style={styles.footerLink}>Facebook</a>
              <a href="https://instagram.com/prathinidhi" style={styles.footerLink}>Instagram</a>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2025 Prathinidhi | A Government of India Initiative</p>
        </div>
      </footer>
    </main>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div style={styles.featureCard}>
    {icon && <div style={styles.featureIcon}>{icon}</div>}
    <h4 style={styles.featureTitle}>{title}</h4>
    <p style={styles.featureDesc}>{description}</p>
  </div>
);

// Enhanced styles with animations
const styles = {
  main: {
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#ffffff",
    color: "#333",
    paddingTop: "80px",
    overflowX: "hidden"
  },
  header: {
    backgroundColor: "#0b5394",
    color: "#fff",
    padding: "1px 0",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 999,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  headerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  logo: { height: "60px" },
  title: { fontSize: "26px", fontWeight: "bold", margin: 0 },
  subtitle: { fontSize: "13px", margin: 0 },
  rightNav: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  languageSelect: {
    padding: "6px",
    fontSize: "14px",
    borderRadius: "4px",
  },
  loginBtn: {
    backgroundColor: "#ffb300",
    border: "none",
    padding: "6px 16px",
    fontSize: "14px",
    color: "#000",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    "&:hover": {
      backgroundColor: "#ffa000",
      transform: "translateY(-2px)",
    }
  },
  // Pop-Up Styles
  languagePopup: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    animation: "fadeIn 0.5s ease",
  },
  popupContent: {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "320px",
    animation: "scaleIn 0.5s ease",
  },
  popupTitle: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#0b5394",
    marginBottom: "20px",
  },
  languageButtons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
  },
  languageButton: {
    padding: "10px 16px",
    backgroundColor: "#0b5394",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "8px",
    flex: "1 1 auto",
    minWidth: "100px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    "&:hover": {
      backgroundColor: "#094a86",
      transform: "scale(1.05)"
    }
  },
  // Animation classes
  fadeInSection: {
    transition: "opacity 1s ease, transform 1s ease",
    transform: "translateY(20px)",
  },
  fadeInVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  fadeInHidden: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  hero: {
    backgroundColor: "#e6f0fa",
    padding: "80px 20px",
    transition: "opacity 1s ease, transform 1s ease",
  },
  heroContent: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
    alignItems: "center",
  },
  heroTextBox: { 
    maxWidth: "600px",
    animation: "slideInLeft 1s ease-out",
  },
  heroTitle: { fontSize: "36px", color: "#0b5394", marginBottom: "20px", fontWeight: "700" },
  heroText: { fontSize: "18px", marginBottom: "30px", lineHeight: "1.6" },
  heroButtons: { display: "flex", gap: "15px", flexWrap: "wrap" },
  primaryBtn: {
    backgroundColor: "#0b5394",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
    }
  },
  secondaryBtn: {
    backgroundColor: "#fff",
    color: "#0b5394",
    border: "2px solid #0b5394",
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    "&:hover": {
      backgroundColor: "#f5f9ff",
      transform: "translateY(-2px)",
    }
  },
  heroImage: { 
    maxWidth: "450px", 
    width: "100%", 
    marginTop: "20px",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    animation: "slideInRight 1s ease-out",
  },
  contentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  sectionTitle: {
    fontSize: "32px",
    color: "#0b5394",
    textAlign: "center",
    marginBottom: "40px",
    position: "relative",
    paddingBottom: "15px",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "3px",
      backgroundColor: "#ffb300",
    }
  },
  about: {
    padding: "80px 0",
    backgroundColor: "#ffffff",
  },
  aboutContent: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px",
  },
  aboutText: {
    flex: "1 1 500px",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "30px",
    color: "#444",
  },
  statsRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: "40px",
    gap: "20px",
  },
  statItem: {
    textAlign: "center",
    flex: "1 1 150px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f5f9ff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
    }
  },
  statNumber: {
    fontSize: "32px",
    color: "#0b5394",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  statLabel: {
    fontSize: "16px",
    color: "#666",
  },
  aboutImageContainer: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
  },
  aboutImage: {
    maxWidth: "100%",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  features: {
    padding: "80px 0",
    backgroundColor: "#f5f9ff",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  },
  featureCard: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    }
  },
  featureIcon: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  featureTitle: {
    fontSize: "22px",
    color: "#0b5394",
    marginBottom: "15px",
    fontWeight: "600",
  },
  featureDesc: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.6",
  },
  useCases: {
    padding: "80px 0",
    backgroundColor: "#fff",
  },
  useCasesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  },
  useCaseCard: {
    backgroundColor: "#f5f9ff",
    padding: "30px",
    borderRadius: "12px",
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "&:hover": {
      transform: "translateY(-5px)",
    }
  },
  useCaseIcon: {
    fontSize: "42px",
    marginBottom: "15px",
  },
  useCaseTitle: {
    fontSize: "20px",
    color: "#0b5394",
    marginBottom: "12px",
    fontWeight: "600",
  },
  useCaseDesc: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
  },
  testimonials: {
    padding: "80px 0",
    backgroundColor: "#f5f9ff",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  },
  testimonialCard: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    position: "relative",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
    }
  },
  quoteMark: {
    fontSize: "70px",
    position: "absolute",
    top: "10px",
    left: "20px",
    color: "#e0e0e0",
    fontFamily: "Georgia, serif",
    zIndex: 0,
  },
  testimonialText: {
    fontSize: "18px",
    color: "#444",
    lineHeight: "1.7",
    marginBottom: "20px",
    position: "relative",
    zIndex: 1,
  },
  testimonialAuthor: {
    fontSize: "16px",
    color: "#0b5394",
    fontWeight: "600",
  },
  tutorials: {
    padding: "80px 20px",
    backgroundColor: "#fff",
  },
  tutorialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "30px",
    maxWidth: "1200px",
    margin: "30px auto 0",
  },
  cta: {
    padding: "80px 20px",
    backgroundColor: "#0b5394",
    color: "#fff",
    textAlign: "center",
  },
  ctaContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  ctaText: {
    fontSize: "18px",
    marginBottom: "30px",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },
  ctaButton: {
    backgroundColor: "#ffb300",
    color: "#000",
    border: "none",
    padding: "14px 32px",
    fontSize: "18px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    }
  },
  footer: {
    backgroundColor: "#07396b",
    color: "#fff",
    padding: "60px 20px 20px",
  },
  footerContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "40px",
  },
  footerLogo: {
    flex: "1 1 300px",
  },
  footerLogoImg: {
    height: "50px",
    marginBottom: "15px",
  },
  footerLinks: {
    flex: "2 1 600px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  footerLinkColumn: {
    flex: "1 1 170px",
    margin: "0 10px",
  },
  footerLinkTitle: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#ffb300",
  },
  footerLink: {
    display: "block",
    color: "#ccc",
    textDecoration: "none",
    marginBottom: "10px",
    fontSize: "14px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#fff",
    }
  },
  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    marginTop: "40px",
    paddingTop: "20px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "40px auto 0",
    fontSize: "14px",
    color: "#ccc",
  },
  // Global CSS Animations - these would normally be defined in a global CSS file
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 }
  },
  "@keyframes scaleIn": {
    "0%": { transform: "scale(0.9)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 }
  },
  "@keyframes slideInLeft": {
    "0%": { transform: "translateX(-50px)", opacity: 0 },
    "100%": { transform: "translateX(0)", opacity: 1 }
  },
  "@keyframes slideInRight": {
    "0%": { transform: "translateX(50px)", opacity: 0 },
    "100%": { transform: "translateX(0)", opacity: 1 }
  },
  "@keyframes scroll": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" }
  }
};

export default Home;