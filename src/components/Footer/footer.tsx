import Logo from "../../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-[#F1F5F9]">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <img src={Logo} alt="Dev" />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#475569]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-sm font-medium text-[#0F172A]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Product
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-[#475569]">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Technologies</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Company
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-[#475569]">
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Legal
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-[#475569]">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#F1F5F9] pt-6 text-sm text-[#94A3B8] sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5 text-[#94A3B8]">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

