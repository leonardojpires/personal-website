import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const value = useMemo(
        () => ({
            lang,
            toggleLang: () => setLang((current) => (current === "en" ? "pt" : "en")),
        }),
        [lang]
    );

    return <LanguageContext.Provider value={value}>
        { children }
    </LanguageContext.Provider>
}
