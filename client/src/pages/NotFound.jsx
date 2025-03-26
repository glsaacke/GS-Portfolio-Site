import '../styles/NotFound.css'

const NotFound = () => {
    return ( 
        <div className="notFound-container">
            <div className="notFound-content">
                <h2>404</h2>
                <h3>Page Not Found!</h3>
                <p>The page you're trying to reach is unavailable</p>
            </div>
            <div className="notFound-bg"></div>
        </div>
     );
}
 
export default NotFound;