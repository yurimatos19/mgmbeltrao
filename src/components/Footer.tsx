const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-heading text-xl font-bold text-heading">MGM</span>
          <span className="text-xs text-muted-foreground ml-2">Serviços Médicos e Consultoria</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MGM. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
