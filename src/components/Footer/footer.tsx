import Logo from "../../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-[#F1F5F9]">
      <div className="py-20 md:py-14">
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Dev Stack" />

            <p className="mt-4 text-[#475569]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 font-medium text-[#0F172A]">
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

          <div className="hidden md:block">
            <h4 className="font-bold uppercase tracking-wider text-[#0F172A]">
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
          <div className="hidden md:block">
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

          <div className="hidden md:block">
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

        <div className="mt-10 flex items-center justify-between border-t border-[#F1F5F9] pt-5 text-xs text-[#94A3B8] md:mt-12 md:text-sm">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4 md:gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;