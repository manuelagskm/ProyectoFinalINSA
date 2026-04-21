// Dictionary for Internationalization (i18n)
// This object holds all the strings used in the application.

const i18n = {
    es: {
        title: "Asistente para Estudiantes en Francia",
        customizerTitle: "Personalización (Estudiante)",
        customizerDesc: "Modifica estas variables para entender cómo CSS interactúa con JavaScript.",
        lblPrimary: "Color Principal:",
        lblBg: "Color de Fondo:",
        lblFont: "Fuente tipográfica:",
        btnReset: "Restaurar Tema",
        
        // Chat Nodes
        node_start_msg: "¡Hola! Soy tu asistente virtual para estudiar en Francia. Para darte la mejor información, necesito saber un poco sobre ti. ¿De dónde eres?",
        ans_eu: "Soy de un país de la Unión Europea (UE/EEE)",
        ans_non_eu: "Soy de un país fuera de la UE",
        
        node_eu_msg: "¡Excelente! Como ciudadano de la UE/EEE, **NO necesitas visa** para estudiar en Francia. Solo necesitas una identificación válida o pasaporte, y demostrar que estás inscrito en una institución educativa y tienes recursos económicos suficientes.",
        ans_eu_more: "Dime más sobre los seguros médicos",
        ans_restart: "Empezar de nuevo",
        
        node_eu_health_msg: "Debes solicitar la Tarjeta Sanitaria Europea (TSE) en tu país de origen antes de viajar. Esto te dará acceso a la atención médica estatal en Francia.",
        
        node_noneu_msg: "¿Cuál es tu nivel de estudios planeado o la duración de tu estancia?",
        ans_short: "Curso corto (menos de 3 meses)",
        ans_long: "Estudios superiores (Licenciatura, Máster - más de 3 meses)",
        
        node_short_msg: "Para estancias menores a 90 días, necesitas solicitar una **Visa Schengen de corta estancia (Visado C)**. No te permite obtener una tarjeta de residencia francesa ni trabajar.",
        
        node_long_msg: "Para estancias mayores a 3 meses, necesitas una **Visa de Larga Estancia (VLS-TS)**. El proceso general requiere que primero te inscribas a través de la plataforma 'Études en France' (Campus France) si tu país está en la lista de procedimiento CEF.",
        ans_campus_france: "¿Qué es Campus France?",
        
        node_campus_msg: "Campus France es la agencia gubernamental que gestiona las admisiones internacionales. Debes crear un expediente online, subir tus notas y pasar una entrevista. Luego, podrás finalizar tu solicitud de visa en el consulado (France-Visas)."
    },
    en: {
        title: "France Student Assistant",
        customizerTitle: "Customization (Student)",
        customizerDesc: "Modify these variables to understand how CSS interacts with JavaScript.",
        lblPrimary: "Primary Color:",
        lblBg: "Background Color:",
        lblFont: "Typography Font:",
        btnReset: "Reset Theme",
        
        // Chat Nodes
        node_start_msg: "Hello! I am your virtual assistant for studying in France. To give you the best information, I need to know a little about you. Where are you from?",
        ans_eu: "I am from an EU/EEA country",
        ans_non_eu: "I am from a non-EU country",
        
        node_eu_msg: "Excellent! As an EU/EEA citizen, you **DO NOT need a visa** to study in France. You just need a valid ID or passport, and to prove that you are enrolled in an educational institution and have sufficient financial resources.",
        ans_eu_more: "Tell me more about health insurance",
        ans_restart: "Start over",
        
        node_eu_health_msg: "You should request the European Health Insurance Card (EHIC) in your home country before traveling. This will give you access to state healthcare in France.",
        
        node_noneu_msg: "What is your planned level of study or the length of your stay?",
        ans_short: "Short course (less than 3 months)",
        ans_long: "Higher education (Bachelor, Master - more than 3 months)",
        
        node_short_msg: "For stays under 90 days, you need to apply for a **Schengen Short-Stay Visa (Type C)**. It does not allow you to get a French residence permit or work.",
        
        node_long_msg: "For stays longer than 3 months, you need a **Long-Stay Visa (VLS-TS)**. The general process requires you to first register through the 'Études en France' platform (Campus France) if your country is on the CEF procedure list.",
        ans_campus_france: "What is Campus France?",
        
        node_campus_msg: "Campus France is the government agency managing international admissions. You must create an online file, upload your grades, and pass an interview. Then, you can finalize your visa application at the consulate (France-Visas)."
    },
    fr: {
        title: "Assistant Étudiant en France",
        customizerTitle: "Personnalisation (Étudiant)",
        customizerDesc: "Modifiez ces variables pour comprendre comment CSS interagit avec JavaScript.",
        lblPrimary: "Couleur Principale:",
        lblBg: "Couleur de Fond:",
        lblFont: "Police de Caractères:",
        btnReset: "Réinitialiser le Thème",
        
        // Chat Nodes
        node_start_msg: "Bonjour ! Je suis votre assistant virtuel pour étudier en France. Pour vous donner les meilleures informations, j'ai besoin d'en savoir un peu plus sur vous. D'où venez-vous ?",
        ans_eu: "Je viens d'un pays de l'UE/EEE",
        ans_non_eu: "Je viens d'un pays hors UE",
        
        node_eu_msg: "Excellent ! En tant que citoyen de l'UE/EEE, vous **n'avez PAS besoin de visa** pour étudier en France. Vous avez juste besoin d'une pièce d'identité valide ou d'un passeport, et de prouver que vous êtes inscrit dans un établissement d'enseignement et que vous avez des ressources financières suffisantes.",
        ans_eu_more: "Dites m'en plus sur l'assurance maladie",
        ans_restart: "Recommencer",
        
        node_eu_health_msg: "Vous devez demander la Carte Européenne d'Assurance Maladie (CEAM) dans votre pays d'origine avant de voyager. Cela vous donnera accès aux soins de santé publics en France.",
        
        node_noneu_msg: "Quel est votre niveau d'études prévu ou la durée de votre séjour ?",
        ans_short: "Séjour court (moins de 3 mois)",
        ans_long: "Études supérieures (Licence, Master - plus de 3 mois)",
        
        node_short_msg: "Pour les séjours de moins de 90 jours, vous devez demander un **Visa Schengen de court séjour (Visa C)**. Il ne vous permet pas d'obtenir une carte de séjour française ou de travailler.",
        
        node_long_msg: "Pour les séjours de plus de 3 mois, vous avez besoin d'un **Visa de long séjour (VLS-TS)**. Le processus général exige que vous vous inscriviez d'abord sur la plateforme 'Études en France' (Campus France) si votre pays figure sur la liste de la procédure CEF.",
        ans_campus_france: "Qu'est-ce que Campus France ?",
        
        node_campus_msg: "Campus France est l'agence gouvernementale qui gère les admissions internationales. Vous devez créer un dossier en ligne, télécharger vos notes et passer un entretien. Ensuite, vous pourrez finaliser votre demande de visa au consulat (France-Visas)."
    }
};

// Function to get string by key and current language
function getStr(lang, key) {
    if (i18n[lang] && i18n[lang][key]) {
        return i18n[lang][key];
    }
    return key; // Fallback to key if not found
}
