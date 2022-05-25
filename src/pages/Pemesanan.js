import { useEffect, useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import '../css/Pemesanan.css';
import API from '../API';
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";

function Pemesanan() {
    const [data, setData] = useState({
        user_id: '',
        doctor_id: '',
        time_book: '',
    });
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);

    const pesan = () => {
        setLoading(true);
        API.post('/order', data).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: 'Pesanan berhasil dibuat',
                timer: 3000
            });
            setLoading(false);
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: 'Harap mengisi jadwal dan pilih dokter terlebih dahulu'
            });
            setLoading(false);
        });
    };
    
    useEffect(() => {
        setData({...data, time_book: time+'/'+date});
    }, [time, date]);

    useEffect(() => {
        API.get('/doctor').then(res => {
            setDoctors(res.data);
            setData({...data, user_id: localStorage.getItem('user')});
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal memuat data!',
                text: 'Silahkan melakukan login terlebih dahulu'
            })
            console.log(err)
        });
    }, []);

    return (
        <div className='pemesanan'>
            <div className='pilih-waktu'>
                <p>{time ? time : 'jam'}/{date ? date : 'tanggal'}</p>
                <h3>Pilih Waktu:</h3>
                <div className='time'>
                    <div className='time-class'>
                        <p>Morning</p>
                        <ToggleButtonGroup
                            color="primary"
                            orientation="vertical"
                            value="black"
                            exclusive
                            onChange={e => setTime(e.target.value)}
                            >
                            <ToggleButton value="07:00 AM">07:00 AM</ToggleButton>
                            <ToggleButton value="08:00 AM">08:00 AM</ToggleButton>
                            <ToggleButton value="09:00 AM">09:00 AM</ToggleButton>
                            <ToggleButton value="10:00 AM">10:00 AM</ToggleButton>
                            <ToggleButton value="11:00 AM">11:00 AM</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className='time-class'>
                        <p>Afternoon</p>
                        <ToggleButtonGroup
                            color="primary"
                            orientation="vertical"
                            value="black"
                            exclusive
                            onChange={e => setTime(e.target.value)}
                            >
                            <ToggleButton value="12:00 PM">12:00 PM</ToggleButton>
                            <ToggleButton value="01:00 PM">01:00 PM</ToggleButton>
                            <ToggleButton value="02:00 PM">02:00 PM</ToggleButton>
                            <ToggleButton value="03:00 PM">03:00 PM</ToggleButton>
                            <ToggleButton value="04:00 PM">04:00 PM</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className='time-class'>
                        <p>Evening</p>
                        <ToggleButtonGroup
                            color="primary"
                            orientation="vertical"
                            value="black"
                            exclusive
                            onChange={e => setTime(e.target.value)}
                            >
                            <ToggleButton value="05:00 PM">05:00 PM</ToggleButton>
                            <ToggleButton value="06:00 PM">06:00 PM</ToggleButton>
                            <ToggleButton value="07:00 PM">07:00 PM</ToggleButton>
                            <ToggleButton value="08:00 PM">08:00 PM</ToggleButton>
                            <ToggleButton value="09:00 PM">09:00 PM</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className='time-class'>
                        <p>Night</p>
                        <ToggleButtonGroup
                            color="primary"
                            orientation="vertical"
                            value="black"
                            exclusive
                            onChange={e => setTime(e.target.value)}
                            >
                            <ToggleButton value="10:00 PM">10:00 PM</ToggleButton>
                            <ToggleButton value="11:00 PM">11:00 PM</ToggleButton>
                            <ToggleButton value="12:00 PM">12:00 PM</ToggleButton>
                            <ToggleButton value="01:00 AM">01:00 AM</ToggleButton>
                            <ToggleButton value="02:00 AM">02:00 AM</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <div>
                    <span>Tanggal: </span>
                    <input type='date' onChange={e => setDate(e.target.value)} />
                </div>
            </div>
            <div className='pilih-dokter'>
                <h3>Pilih dokter:</h3>
                <div className='dokter-container'>
                    {doctors.map(doctor => {
                        return (
                            <div className='dokter' key={doctor._id}>
                                <p>{doctor.name}</p>
                                <img src={doctor.img} alt='doctor' />
                                <p>Harga: Rp.{doctor.price}</p>
                                <input type='radio' name='dokter' value={doctor._id} onChange={e => setData({...data, doctor_id: e.target.value})}  />
                            </div>
                        );
                    })}
                </div>
                <button onClick={pesan}>PESAN {loading ? <CircularProgress color="inherit" size={20} /> : ''}</button>
            </div>
        </div>
    );
}

export default Pemesanan;