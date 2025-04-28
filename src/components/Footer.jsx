function Footer() {
    return (
      <footer className="footer-container text-center py-4 mt-5"
      style={{background:"#2D3250"}}>
        <div className="social-icons mb-2">
          <a href="https://www.linkedin.com/in/filza-saleem-171ba9131/" target="_blank" rel="noopener noreferrer" className="mx-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/filzasaleem" target="_blank" rel="noopener noreferrer" className="mx-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="tel:+737324236" className="mx-3 text-decoration-none">
            <i className="bi bi-telephone-fill"></i> +46737324136
          </a>
        </div>
        <small className="text-white">&copy; {new Date().getFullYear()} Filza Saleem. All rights reserved.</small>
      </footer>
    );
  }
  
  export default Footer;
  
  