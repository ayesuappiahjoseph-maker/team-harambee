import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

export default function MobileMenu({ open, onClose, links }) {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ink border-l border-gold/20 pt-20 px-6 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {links.map((link, i) => (
            <li
              key={link.to}
              className="animate-reveal"
              style={{ animationDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `block border-b border-paper/10 py-4 text-lg font-display ${
                    isActive ? "text-gold" : "text-paper"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between rounded-full border border-paper/15 px-4 py-2.5">
          <span className="text-sm font-medium text-paper">
            {theme === "dark" ? "Dark mode" : "Light mode"}
          </span>
          <ThemeToggle />
        </div>

        <NavLink
          to="/contact"
          onClick={onClose}
          className="mt-8 block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
        >
          Get in Touch
        </NavLink>
      </nav>
    </div>
  );
}
