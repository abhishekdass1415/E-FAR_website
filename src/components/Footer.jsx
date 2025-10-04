export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6">
      <p>© {new Date().getFullYear()} E-Formula Ashwa Riders. All rights reserved.</p>

      <div className="flex justify-center items-center gap-12 mt-6">
        <a
          href="https://www.instagram.com/eformula_ashwariders?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="text-white/80 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 16.8 2.8 2.8 0 0 0 12 9.2ZM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/e-formula-ashwa-riders-6642ba233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="text-white/80 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.84v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V23h-4v-6.64c0-1.58-.03-3.62-2.21-3.62-2.22 0-2.56 1.73-2.56 3.51V23h-3.7V8Z"/>
          </svg>
        </a>

        <a
          href="https://youtube.com/@e-formulaashwariders7948?si=IP5lJh3_AImt0F1c"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          title="YouTube"
          className="text-white/80 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M23.5 6.2a3.09 3.09 0 0 0-2.17-2.18C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.33.52A3.09 3.09 0 0 0 .5 6.2 32 32 0 0 0 0 12a32 32 0 0 0 .5 5.8 3.09 3.09 0 0 0 2.17 2.18C4.5 20.5 12 20.5 12 20.5s7.5 0 9.33-.52a3.09 3.09 0 0 0 2.17-2.18A32 32 0 0 0 24 12a32 32 0 0 0-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
