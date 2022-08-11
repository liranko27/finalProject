import Spinner from 'react-bootstrap/Spinner';
import '../styles/Spin.css'

function Spin() {
    return (
        <div className="spinner-wrap">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>

    );
}

export default Spin;