const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Community", "Contact"],
    },
  ];

  return (
    <footer className="bg-heading text-white">
      <div className="container mx-auto px-6 pt-16 pb-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-white text-3xl lg:text-5xl lg:font-bold font-medium tracking-tight">
              DigiTools
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-3 gap-4">
            {footerLinks.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-medium">{group.title}</h3>
                <ul className="space-y-3 text-sm *:font-light">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-medium text-base">Social Links</h3>
            <div className="flex items-center gap-3">
              <a
                href="#instagram"
                className="w-9 h-9 bg-white text-[#0f172a] hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                </svg>
              </a>

              <a
                href="#facebook"
                className="w-9 h-9 bg-white text-[#0f172a] hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="#x"
                className="w-9 h-9 bg-white text-[#0f172a] hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="X"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-xs space-y-4 md:space-y-0 text-slate-500">
          <div>© 2026 Digitools. All rights reserved.</div>
          <div className="flex space-x-6">
            <a
              href="#privacy"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="hover:text-slate-400 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
