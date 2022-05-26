import '../../css/Contents.css';
import { Outlet } from 'react-router-dom';

function InfoKesehatan() {
    return (
        <div className='info-kesehatan'>
            <Outlet />
        </div>
    );
}

export default InfoKesehatan;