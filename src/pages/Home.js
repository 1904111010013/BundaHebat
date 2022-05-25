import '../css/Home.css';
import Header from '../components/Header';

function Home() {
    return (
        <div className='home'>
            <Header />
            <div className='box-wrapper'>
                <div className='box'>
                    <i className='fa-solid fa-heart-pulse'></i>
                    <div className='box-text'>
                        <h3>Pusat Kesehatan</h3>
                        <p>Jantung</p>
                    </div>
                </div>
                <div className='box'>
                    <i className='fa-solid fa-virus'></i>
                    <div className='box-text'>
                        <h3>Pusat Kesehatan</h3>
                        <p>Kanker</p>
                    </div>
                </div>
                <div className='box'>
                    <i className='fa-solid fa-person-pregnant'></i>
                    <div className='box-text'>
                        <h3>Pusat Kesehatan</h3>
                        <p>Kehamilan</p>
                    </div>
                </div>
                <div className='box'>
                    <i className='fa-solid fa-baby'></i>
                    <div className='box-text'>
                        <h3>Pusat Kesehatan</h3>
                        <p>Bayi & Balita</p>
                    </div>
                </div>
                <div className='box'>
                    <i className='fa-solid fa-weight-scale'></i>
                    <div className='box-text'>
                        <h3>Pusat Kesehatan</h3>
                        <p>Turun Berat Badan</p>
                    </div>
                </div>
                <div className='box'>
                    <i className='fa-solid fa-plus'></i>
                    <div className='box-text'>
                        <p>Lihat Lainnya</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;