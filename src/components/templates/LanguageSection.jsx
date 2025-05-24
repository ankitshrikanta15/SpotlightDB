



const LanguageSection = ({ information }) => {

  const getFilteredLanguages = (translations) => {
    // Priority languages to show first
    const priorityLanguages = ["en", "hi", "ta", "te", "ml", "kn"];
  
    return translations
      .filter((lang) => priorityLanguages.includes(lang.iso_639_1))
      .sort((a, b) => {
        // Sort based on priority order
        return (
          priorityLanguages.indexOf(a.iso_639_1) -
          priorityLanguages.indexOf(b.iso_639_1)
        );
      })
      .slice(0, 6);
  };
  
  const getLanguageDisplayName = (englishName, isoCode) => {
    const languageMap = {
      en: "English",
      hi: "हिंदी",
      ta: "தமிழ்",
      te: "తెలుగు",
      ml: "മലയാളം",
      kn: "ಕನ್ನಡ",
    };
  
    return languageMap[isoCode] || englishName;
  };


  return (
    <div className="absolute bottom-8 right-20">
          <div className="flex items-center gap-3 text-white/80">
            <div className="flex flex-wrap gap-2">
              {getFilteredLanguages(information.translations).map(
                (lang, index) => (
                  <span
                    key={index}
                    className="bg-zinc-800/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm
                      border border-zinc-700/50 hover:border-[#6556CD]/30 transition-all duration-300"
                  >
                    {getLanguageDisplayName(lang.english_name, lang.iso_639_1)}
                  </span>
                )
              )}
              {information.translations.length > 6 && (
                <span
                  className="bg-zinc-800/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm
                    border border-zinc-700/50 hover:border-[#6556CD]/30 transition-all duration-300"
                >
                  +{information.translations.length - 6} more
                </span>
              )}
            </div>
          </div>
        </div>
  )
}

export default LanguageSection