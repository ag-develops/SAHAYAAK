import React from 'react';

export default function Footer() {
  const triggerVoiceHelp = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("Namaste! I am Sahaayak. How can I help you today?");
      utterance.lang = 'en-IN';
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Voice assistance ready. Say 'Hey Sahaayak' or call 1800-202-4400.");
    }
  };

  return (
    <footer className="w-full bg-[#ecf6f4] py-8 mt-12 border-t border-[#dbe5e2]">
      <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-[#0e4d48] text-white flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[30px]">support_agent</span>
          </div>
          <div>
            <p className="font-bold text-lg text-[#003531]">Need help using this screen?</p>
            <p className="text-base text-[#404947]">
              Tap anywhere and say{' '}
              <button
                type="button"
                onClick={triggerVoiceHelp}
                className="font-bold text-[#994703] underline hover:text-[#fc934f] cursor-pointer"
              >
                “Hey Sahaayak”
              </button>{' '}
              or call our round-the-clock helpline.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-[0_2px_8px_rgba(20,29,28,0.06)] border border-[#dbe5e2]">
          <span className="material-symbols-outlined text-[#994703] text-[26px]">phone_in_talk</span>
          <div className="text-left">
            <span className="block text-xs text-[#404947] font-semibold leading-none">Toll-Free Helpline</span>
            <a href="tel:18002024400" className="font-bold text-2xl text-[#003531] tracking-tight hover:underline">
              1800-202-4400
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
