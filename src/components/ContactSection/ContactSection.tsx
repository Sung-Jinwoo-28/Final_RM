import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle, AlertCircle, ChevronDown, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../lightswind/card";

// ----------------------------------------------------------------------
// Country Data
// ----------------------------------------------------------------------
const countries = [
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
  { name: "Afghanistan", code: "AF", dial_code: "+93" },
  { name: "Albania", code: "AL", dial_code: "+355" },
  { name: "Algeria", code: "DZ", dial_code: "+213" },
  { name: "Andorra", code: "AD", dial_code: "+376" },
  { name: "Angola", code: "AO", dial_code: "+244" },
  { name: "Argentina", code: "AR", dial_code: "+54" },
  { name: "Armenia", code: "AM", dial_code: "+374" },
  { name: "Australia", code: "AU", dial_code: "+61" },
  { name: "Austria", code: "AT", dial_code: "+43" },
  { name: "Azerbaijan", code: "AZ", dial_code: "+994" },
  { name: "Bahrain", code: "BH", dial_code: "+973" },
  { name: "Bangladesh", code: "BD", dial_code: "+880" },
  { name: "Belarus", code: "BY", dial_code: "+375" },
  { name: "Belgium", code: "BE", dial_code: "+32" },
  { name: "Belize", code: "BZ", dial_code: "+501" },
  { name: "Benin", code: "BJ", dial_code: "+229" },
  { name: "Bhutan", code: "BT", dial_code: "+975" },
  { name: "Bolivia", code: "BO", dial_code: "+591" },
  { name: "Bosnia and Herzegovina", code: "BA", dial_code: "+387" },
  { name: "Botswana", code: "BW", dial_code: "+267" },
  { name: "Brazil", code: "BR", dial_code: "+55" },
  { name: "Brunei Darussalam", code: "BN", dial_code: "+673" },
  { name: "Bulgaria", code: "BG", dial_code: "+359" },
  { name: "Burkina Faso", code: "BF", dial_code: "+226" },
  { name: "Burundi", code: "BI", dial_code: "+257" },
  { name: "Cambodia", code: "KH", dial_code: "+855" },
  { name: "Cameroon", code: "CM", dial_code: "+237" },
  { name: "Canada", code: "CA", dial_code: "+1" },
  { name: "Cape Verde", code: "CV", dial_code: "+238" },
  { name: "Central African Republic", code: "CF", dial_code: "+236" },
  { name: "Chad", code: "TD", dial_code: "+235" },
  { name: "Chile", code: "CL", dial_code: "+56" },
  { name: "China", code: "CN", dial_code: "+86" },
  { name: "Colombia", code: "CO", dial_code: "+57" },
  { name: "Comoros", code: "KM", dial_code: "+269" },
  { name: "Congo", code: "CG", dial_code: "+242" },
  { name: "Costa Rica", code: "CR", dial_code: "+506" },
  { name: "Croatia", code: "HR", dial_code: "+385" },
  { name: "Cuba", code: "CU", dial_code: "+53" },
  { name: "Cyprus", code: "CY", dial_code: "+357" },
  { name: "Czech Republic", code: "CZ", dial_code: "+420" },
  { name: "Denmark", code: "DK", dial_code: "+45" },
  { name: "Djibouti", code: "DJ", dial_code: "+253" },
  { name: "Ecuador", code: "EC", dial_code: "+593" },
  { name: "Egypt", code: "EG", dial_code: "+20" },
  { name: "El Salvador", code: "SV", dial_code: "+503" },
  { name: "Equatorial Guinea", code: "GQ", dial_code: "+240" },
  { name: "Eritrea", code: "ER", dial_code: "+291" },
  { name: "Estonia", code: "EE", dial_code: "+372" },
  { name: "Ethiopia", code: "ET", dial_code: "+251" },
  { name: "Fiji", code: "FJ", dial_code: "+679" },
  { name: "Finland", code: "FI", dial_code: "+358" },
  { name: "France", code: "FR", dial_code: "+33" },
  { name: "Gabon", code: "GA", dial_code: "+241" },
  { name: "Gambia", code: "GM", dial_code: "+220" },
  { name: "Georgia", code: "GE", dial_code: "+995" },
  { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "Ghana", code: "GH", dial_code: "+233" },
  { name: "Greece", code: "GR", dial_code: "+30" },
  { name: "Guatemala", code: "GT", dial_code: "+502" },
  { name: "Guinea", code: "GN", dial_code: "+224" },
  { name: "Guyana", code: "GY", dial_code: "+592" },
  { name: "Haiti", code: "HT", dial_code: "+509" },
  { name: "Honduras", code: "HN", dial_code: "+504" },
  { name: "Hong Kong", code: "HK", dial_code: "+852" },
  { name: "Hungary", code: "HU", dial_code: "+36" },
  { name: "Iceland", code: "IS", dial_code: "+354" },
  { name: "Indonesia", code: "ID", dial_code: "+62" },
  { name: "Iran", code: "IR", dial_code: "+98" },
  { name: "Iraq", code: "IQ", dial_code: "+964" },
  { name: "Ireland", code: "IE", dial_code: "+353" },
  { name: "Israel", code: "IL", dial_code: "+972" },
  { name: "Italy", code: "IT", dial_code: "+39" },
  { name: "Jamaica", code: "JM", dial_code: "+1876" },
  { name: "Japan", code: "JP", dial_code: "+81" },
  { name: "Jordan", code: "JO", dial_code: "+962" },
  { name: "Kazakhstan", code: "KZ", dial_code: "+7" },
  { name: "Kenya", code: "KE", dial_code: "+254" },
  { name: "Kuwait", code: "KW", dial_code: "+965" },
  { name: "Kyrgyzstan", code: "KG", dial_code: "+996" },
  { name: "Laos", code: "LA", dial_code: "+856" },
  { name: "Latvia", code: "LV", dial_code: "+371" },
  { name: "Lebanon", code: "LB", dial_code: "+961" },
  { name: "Lesotho", code: "LS", dial_code: "+266" },
  { name: "Liberia", code: "LR", dial_code: "+231" },
  { name: "Libya", code: "LY", dial_code: "+218" },
  { name: "Liechtenstein", code: "LI", dial_code: "+423" },
  { name: "Lithuania", code: "LT", dial_code: "+370" },
  { name: "Luxembourg", code: "LU", dial_code: "+352" },
  { name: "Macao", code: "MO", dial_code: "+853" },
  { name: "Macedonia", code: "MK", dial_code: "+389" },
  { name: "Madagascar", code: "MG", dial_code: "+261" },
  { name: "Malawi", code: "MW", dial_code: "+265" },
  { name: "Malaysia", code: "MY", dial_code: "+60" },
  { name: "Maldives", code: "MV", dial_code: "+960" },
  { name: "Mali", code: "ML", dial_code: "+223" },
  { name: "Malta", code: "MT", dial_code: "+356" },
  { name: "Mauritania", code: "MR", dial_code: "+222" },
  { name: "Mauritius", code: "MU", dial_code: "+230" },
  { name: "Mexico", code: "MX", dial_code: "+52" },
  { name: "Moldova", code: "MD", dial_code: "+373" },
  { name: "Monaco", code: "MC", dial_code: "+377" },
  { name: "Mongolia", code: "MN", dial_code: "+976" },
  { name: "Montenegro", code: "ME", dial_code: "+382" },
  { name: "Morocco", code: "MA", dial_code: "+212" },
  { name: "Mozambique", code: "MZ", dial_code: "+258" },
  { name: "Myanmar", code: "MM", dial_code: "+95" },
  { name: "Namibia", code: "NA", dial_code: "+264" },
  { name: "Nepal", code: "NP", dial_code: "+977" },
  { name: "Netherlands", code: "NL", dial_code: "+31" },
  { name: "New Zealand", code: "NZ", dial_code: "+64" },
  { name: "Nicaragua", code: "NI", dial_code: "+505" },
  { name: "Niger", code: "NE", dial_code: "+227" },
  { name: "Nigeria", code: "NG", dial_code: "+234" },
  { name: "North Korea", code: "KP", dial_code: "+850" },
  { name: "Norway", code: "NO", dial_code: "+47" },
  { name: "Oman", code: "OM", dial_code: "+968" },
  { name: "Pakistan", code: "PK", dial_code: "+92" },
  { name: "Panama", code: "PA", dial_code: "+507" },
  { name: "Papua New Guinea", code: "PG", dial_code: "+675" },
  { name: "Paraguay", code: "PY", dial_code: "+595" },
  { name: "Peru", code: "PE", dial_code: "+51" },
  { name: "Philippines", code: "PH", dial_code: "+63" },
  { name: "Poland", code: "PL", dial_code: "+48" },
  { name: "Portugal", code: "PT", dial_code: "+351" },
  { name: "Qatar", code: "QA", dial_code: "+974" },
  { name: "Romania", code: "RO", dial_code: "+40" },
  { name: "Russia", code: "RU", dial_code: "+7" },
  { name: "Rwanda", code: "RW", dial_code: "+250" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966" },
  { name: "Senegal", code: "SN", dial_code: "+221" },
  { name: "Serbia", code: "RS", dial_code: "+381" },
  { name: "Seychelles", code: "SC", dial_code: "+248" },
  { name: "Sierra Leone", code: "SL", dial_code: "+232" },
  { name: "Singapore", code: "SG", dial_code: "+65" },
  { name: "Slovakia", code: "SK", dial_code: "+421" },
  { name: "Slovenia", code: "SI", dial_code: "+386" },
  { name: "Somalia", code: "SO", dial_code: "+252" },
  { name: "South Africa", code: "ZA", dial_code: "+27" },
  { name: "South Korea", code: "KR", dial_code: "+82" },
  { name: "Spain", code: "ES", dial_code: "+34" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94" },
  { name: "Sudan", code: "SD", dial_code: "+249" },
  { name: "Suriname", code: "SR", dial_code: "+597" },
  { name: "Swaziland", code: "SZ", dial_code: "+268" },
  { name: "Sweden", code: "SE", dial_code: "+46" },
  { name: "Switzerland", code: "CH", dial_code: "+41" },
  { name: "Syria", code: "SY", dial_code: "+963" },
  { name: "Taiwan", code: "TW", dial_code: "+886" },
  { name: "Tajikistan", code: "TJ", dial_code: "+992" },
  { name: "Tanzania", code: "TZ", dial_code: "+255" },
  { name: "Thailand", code: "TH", dial_code: "+66" },
  { name: "Togo", code: "TG", dial_code: "+228" },
  { name: "Tonga", code: "TO", dial_code: "+676" },
  { name: "Tunisia", code: "TN", dial_code: "+216" },
  { name: "Turkey", code: "TR", dial_code: "+90" },
  { name: "Turkmenistan", code: "TM", dial_code: "+993" },
  { name: "Uganda", code: "UG", dial_code: "+256" },
  { name: "Ukraine", code: "UA", dial_code: "+380" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
  { name: "Uruguay", code: "UY", dial_code: "+598" },
  { name: "Uzbekistan", code: "UZ", dial_code: "+998" },
  { name: "Venezuela", code: "VE", dial_code: "+58" },
  { name: "Vietnam", code: "VN", dial_code: "+84" },
  { name: "Yemen", code: "YE", dial_code: "+967" },
  { name: "Zambia", code: "ZM", dial_code: "+260" },
  { name: "Zimbabwe", code: "ZW", dial_code: "+263" },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [resultMessage, setResultMessage] = useState("");
  
  // Country Dropdown State
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to India
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries based on search
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.dial_code.includes(searchQuery) ||
    country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const socialLinks = [
    { name: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:rahulseuphoria@gmail.com" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/rahul-modi-886738368" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/Sung-Jinwoo-28" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/yourhandle" },
  ];

  // Glassmorphism styles
  const glassCardStyle = "!bg-white/5 dark:!bg-black/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl";
  const glassInputStyle = "w-full p-3 rounded-xl bg-white/10 dark:bg-black/20 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all backdrop-blur-sm text-gray-800 dark:text-gray-100 placeholder:text-gray-500";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setResultMessage("");

    // Updated Webhook URL (Make.com)
    const WEBHOOK_URL = "https://hook.eu2.make.com/wmw3raqc781eahs3ti5581mv3hxtwly8";

    const formData = new FormData(event.currentTarget);
    // Convert FormData to a plain JavaScript object
    const data = Object.fromEntries(formData.entries());

    try {
      // Send data to Make webhook using fetch
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // If fetch succeeds (doesn't throw), we assume the webhook received it.
      setSubmitStatus("success");
      setResultMessage("Message sent successfully!");
      (event.target as HTMLFormElement).reset();
      setSelectedCountry(countries[0]); // Reset country
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setResultMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        // Only clear success messages automatically
        setSubmitStatus("idle");
        setResultMessage("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className={`h-full ${glassCardStyle}`}>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-white/10 hover:bg-indigo-500 hover:text-white transition-colors duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className={glassCardStyle}>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <input type="hidden" name="subject" value="New Portfolio Contact Submission" />
                {/* Hidden input to send the selected country code */}
                <input type="hidden" name="country_code" value={selectedCountry.dial_code} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        required 
                        className={glassInputStyle} 
                        placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        required 
                        className={glassInputStyle} 
                        placeholder="john@example.com" 
                    />
                  </div>
                </div>

                {/* Custom Country Dropdown & Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                  <div className="flex gap-3 relative">
                    {/* Custom Dropdown Trigger */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`${glassInputStyle} w-32 flex items-center justify-between gap-2 px-3`}
                        >
                            <span className="truncate">{selectedCountry.code} {selectedCountry.dial_code}</span>
                            <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 mt-2 w-64 max-h-60 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col"
                                >
                                    {/* Search Bar */}
                                    <div className="p-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900">
                                        <div className="relative">
                                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search country..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-500 outline-none"
                                                autoFocus
                                            />
                                        </div>
                                    </div>

                                    {/* Country List */}
                                    <div className="overflow-y-auto flex-1">
                                        {filteredCountries.length > 0 ? (
                                            filteredCountries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setIsDropdownOpen(false);
                                                        setSearchQuery("");
                                                    }}
                                                    className="w-full px-4 py-2 text-left text-sm hover:bg-indigo-50 dark:hover:bg-indigo-900/30 flex items-center justify-between group transition-colors"
                                                >
                                                    <span className="text-gray-700 dark:text-gray-200">{country.name}</span>
                                                    <span className="text-gray-400 group-hover:text-indigo-500 font-mono text-xs">{country.dial_code}</span>
                                                </button>
                                            ))
                                        ) : (
                                            <div className="p-4 text-center text-sm text-gray-500">No country found</div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <input 
                        type="tel" 
                        name="phone" 
                        className={`${glassInputStyle} flex-1`} 
                        placeholder="98765 43210" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4} 
                    className={`${glassInputStyle} resize-none`} 
                    placeholder="Your message here..." 
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full py-2.5 px-4 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg 
                    ${submitStatus === "success" ? "bg-pink-600 hover:bg-pink-700" : 
                      submitStatus === "error" ? "bg-red-600 hover:bg-red-700" : 
                      "bg-indigo-600 hover:bg-indigo-700"} text-white`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitStatus === "success" ? (
                    <>Sent! <CheckCircle size={16} /></>
                  ) : submitStatus === "error" ? (
                    <>Failed <AlertCircle size={16} /></>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </motion.button>

                {resultMessage && (
                    <p className={`text-center text-sm mt-2 ${submitStatus === 'success' ? 'text-indigo-500' : 'text-indigo-500'}`}>
                        {resultMessage}
                    </p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
