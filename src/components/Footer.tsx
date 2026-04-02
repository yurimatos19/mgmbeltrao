import logoMgm from "@/assets/logo-mgm-transparent.png";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3">
          <img src={logoMgm} alt="MGM" className="h-10 w-auto" />
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MGM. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
