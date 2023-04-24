const Navbar = () => (<div id="navbar" className="sticky">
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div className="container-fluid">
                <a to="/" className="navbar-brand fw-bold">PDF Splitter</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" to="/" >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/" >
                                Tools
                            </a>
                        </li>
                    </ul>
                    <a href="https://github.com/saiedislamshuvo/pdf-splitter-tool-react" className="btn btn-dark">
                        Github
                    </a>
                </div>
            </div>
        </nav>
    </div>
</div >)

export default Navbar;