import '../css/Riwayat.css';
import Search from '../components/Search';

function Riwayat() {
    const riwayat = [
        {
            date: '03/13/2022',
            name: 'Dr.Tony stark',
            email: 'tony@gmail.com',
            amount: '$25',
        },
        {
            date: '03/13/2022',
            name: 'Dr.Strange',
            email: 'strange@gmail.com',
            amount: '$75',
        },
        {
            date: '03/13/2022',
            name: 'Dr.Jhon Olshone ',
            email: 'jhonolshone17@gmail.com',
            amount: '$30',
        },
        {
            date: '03/13/2022',
            name: 'Dr.Peter Parker',
            email: 'parker@gmail.com',
            amount: '$15.5',
        },
        {
            date: '03/13/2022',
            name: 'Dr.Octo Rikon Rahman',
            email: 'octorikonrahman@gmail.com',
            amount: '$43',
        },
    ];
    return (
        <div className='riwayat'>
            <div className='riwayat-header'>
                <div className='riwayat-label'>
                    <section>
                        <h2>Riwayat</h2>
                        <p>Semua riwayat transaksi</p>
                    </section>
                    <button className='edit-btn'>Edit</button>
                </div>
                <div className='search-wrapper'>
                    <Search />
                    <div className='show-result'>
                        <p>Show result</p>
                        <button>5<i className='fa-solid fa-angle-down'></i></button>
                    </div>
                </div>
            </div>
            <div className='riwayat-table'>
                <table>
                    <thead>
                        <th>Tanggal</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Jumlah</th>
                        <th>Aksi</th>
                    </thead>
                    {riwayat.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <div className='actions'>
                                        <i className='fa-regular fa-envelope'></i>
                                        <i className='fa-solid fa-list-check'></i>
                                        <i className='fa-regular fa-circle-xmark'></i>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </table>
                <div className='next-prev'>
                    <button>Previous</button>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Riwayat;