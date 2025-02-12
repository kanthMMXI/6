function speakTranslation() {
    const translatedText = document.getElementById('outputText').textContent.trim();

    if (!translatedText) {
        alert("No translated text to speak!");
        return;
    }

    const targetLanguage = document.getElementById('languageSelect').value;
    let utterance = new SpeechSynthesisUtterance(translatedText);
    
    switch (targetLanguage) {
        case "si":
            utterance.lang = "si-LK";  // Sinhala
            break;
        case "ta":
            utterance.lang = "ta-IN";  // Tamil
            break;
        case "tl":
            utterance.lang = "tl-PH";  // Tagalog
            break;
        default:
            utterance.lang = "en-US";  // Default language
    }

    utterance.rate = 1;
    speechSynthesis.cancel();  // Stop any ongoing speech
    speechSynthesis.speak(utterance);
}
