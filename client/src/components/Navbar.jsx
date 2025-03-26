import '../styles/Navbar.css'
import {Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <div className="navbar-content">
                {/* <svg width="48px" height="48px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-75.439781,-72.187958)">
                        <circle style={{ fill: "#333a56", fillOpacity: 1 }} cx="115.43978" cy="112.18796" r="40"/>
                        <text xmlSpace="preserve" transform="matrix(0.38590681,0,0,0.38590681,-50.726779,-58.850138)" style={{ fontSize: "186.667px", fontFamily: "DM Sans", fill: "#FFFFFF", fillOpacity: 1, fontWeight: "bold" }}>
                        <tspan x="360.17773" y="508.171">G</tspan>
                        </text>
                    </g>
                </svg> */}

                <svg width="48px" height="48px" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="#333a56" cx="40" cy="40" r="40" />
                    <text x="50%" y="79%" font-size="70" font-family="'DM Sans', sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">G</text>
                </svg>

                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
                <div className="nav-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256">
                        <g fill="#333a56" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal'}}><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
                    </svg>
                
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256">
                        <g fill="#333a56" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal'}}><g transform="scale(8.53333,8.53333)"><path d="M9,25h-5v-15h5zM6.501,8c-1.383,0 -2.501,-1.121 -2.501,-2.501c0,-1.38 1.12,-2.499 2.501,-2.499c1.378,0 2.499,1.121 2.499,2.499c0,1.38 -1.121,2.501 -2.499,2.501zM27,25h-4.807v-7.3c0,-1.741 -0.033,-3.98 -2.499,-3.98c-2.503,0 -2.888,1.896 -2.888,3.854v7.426h-4.806v-15.011h4.614v2.051h0.065c0.642,-1.18 2.211,-2.424 4.551,-2.424c4.87,0 5.77,3.109 5.77,7.151c0,0 0,8.233 0,8.233z"></path></g></g>
                    </svg>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;