import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import"./daftarizin.css"
import LayoutDefault from '../../../layouts/Default';
import siswa from"./img/siswa.png"
import { Link } from 'react-router-dom';
import form from "./img/form.png";
import Aos from 'aos';
import absen from "./img/absen.png";

function BasicExample() {
  return (
    <LayoutDefault>
        <div className='header-izin' >
            <h2>Izin Keluar Lingkungan Sekolah</h2>
        </div>
        <div className='content-izin'>
    <Card style={{ width: '250px', marginRight:"100px", marginLeft:"40px", borderRadius:"30px"}}>
      <Card.Img variant="top" src={siswa} style={{backgroundColor:"#0D6EFD", borderRadius:"30px"}} />
      <Card.Body>
        <Card.Title style={{fontWeight:"bold"}}>Data Siswa Izin Keluar</Card.Title>
        <Card.Text>
          Data Siswa SMKN 1 Ciomas Izin Keluar , Dari Jurusan PPLG, Animasi , BCF, Otomotif, TPFL
        </Card.Text>
        <Link to="/DaftarIzin">
        <Button variant="secondary">Pergi Ke Data Izin</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '250px', marginRight:"100px", borderRadius:"30px" }}>
      <Card.Img variant="top" src={form} style={{borderRadius:"30px"}} />
      <Card.Body>
        <Card.Title style={{fontWeight:"bold"}}>Form Izin Keluar</Card.Title>
        <Card.Text>
          Form Untuk Mebuat Izin Keluar Bagi Siswa SMKN 1 Ciomas
        </Card.Text>
        <Link to="/izin">
        <Button variant="primary">Isi Form</Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '250px',  borderRadius:"30px"}}>
      <Card.Img variant="top" src={absen}style={{borderRadius:"30px"}} />
      <Card.Body>
        <Card.Title >Absen</Card.Title>
        <Card.Text>
          Rekap Absen SMKN 1 Ciomas Akan Tersimpan Di Data berikut 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </LayoutDefault>
  );
}

export default BasicExample;