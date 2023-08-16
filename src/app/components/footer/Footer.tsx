const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-dark">
      <div className="container mx-auto p-2">
        <p className="text-white text-right text-xs">
          Eventix ® {year} | Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
