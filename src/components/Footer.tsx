const Footer = () => (
  <footer className="border-t border-border py-12 bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-heading text-xl font-bold text-heading">MGM</span>
          <div className="w-px h-4 bg-border" />
          <span className="text-xs text-muted-foreground tracking-wide">Serviços Médicos e Consultoria</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MGM. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
