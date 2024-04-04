import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import HomePage from "./pages/Homepage";
import Navbar from './components/Navbar';


import Dashboard from './views/Dashboard/Index';
import Aos from 'aos';
import '../node_modules/aos/dist/aos.css'
import Guru from "./views/admin/guru/DaftarGuru"
import Siswa from "./views/admin/siswa/DaftarSiswa"
import GuruCreate from "./views/admin/guru/GuruCreate"
import CreateSiswa from "../src/components/SiswaCreate"
import KehadiranGuru from "../src/views/admin/KehadiranGuru"
import KehadiranSiswa from "../src/components/KehadiranSiswa"
import Login from "../src/views/Auth/Login"
import View from "../src/components/UserView"
import Edit from "../src/components/EditUser"
import Users from "../src/views/admin/DaftarUser"
import Profile from "../src/components/Profile"
import jurusan from "./views/admin/Jurusan/DaftarJurusan"
import pplg from "./views/admin/Kelas/pplg"
import animasi from "./views/admin/Kelas/animasi"
import bcf from "./views/admin/Kelas/bcf"
import to from "./views/admin/Kelas/to"
import tpfl from "./views/admin/Kelas/tpfl"
import Otomotif from "./views/admin/Kelas/Kelass/Otomotif"
import Rpl from "./views/admin/Kelas/Kelass/pplg"
import Anim from "./views/admin/Kelas/Kelass/animasi"
import Broadcasting from "./views/admin/Kelas/Kelass/bcf"
import Tpfl from "./views/admin/Kelas/Kelass/tpfl"
import Izin from "./views/admin/izin/FormIzin"
import Print from "./views/admin/izin/print"
import rekapguru from "./views/GuruPiket/rekapguru"
import Print1 from "./views/admin/izin/print/print1"
import Print2 from "./views/admin/izin/print/print2"
import Print3 from "./views/admin/izin/print/print3"
import Print4 from "./views/admin/izin/print/print4"
import MenuIzin from"./views/admin/izin/MenuIzin"
import DaftarIzin from "./views/admin/izin/DaftarIzin"
import SiswaCreate from './views/admin/siswa/SiswaCreate';
import PiketCreate from './views/admin/piket/PiketCreate'
import EditSiswa from './views/admin/siswa/EditSiswa'
import HadirGuru from'./views/admin/guru/hadir/index'
import TidakHadirGuru from "./views/admin/guru/TidakHadir/index"
import TerlambatGuru from'./views/admin/guru/TidakHadir/index'
import HadirSiswa from'./views/admin/siswa/hadir/index'
import TidakHadirSiswa from "./views/admin/siswa/TidakHadir/index"
import TerlambatSiswa from'./views/admin/siswa/TidakHadir/index'
import FormIzin from './views/admin/izin/FormIzin'
import Piket from './views/admin/piket/index'
import FormAbsen from './views/GuruPiket/FormAbsen'
import FormSiswa from './views/GuruPiket/FormSiswa'
import AbsenSiswa from './views/GuruPiket/AbsenSiswa'
import AbsenGuru from './views/GuruPiket/AbsenGuru'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MenuIzin" element={<MenuIzin />} />
        <Route path="/DaftarIzin" element={<DaftarIzin />} />
        <Route path="/HadirGuru" element={<HadirGuru />} />
        <Route path="/TidakHadirGuru" element={<TidakHadirGuru />} />
        <Route path="/TerlambatGuru" element={<TerlambatGuru />} />
        <Route path="/HadirSiswa" element={<HadirSiswa />} />
        <Route path="/TidakHadirSiswa" element={<TidakHadirSiswa />} />
        <Route path="/TerlambatSiswa" element={<TerlambatSiswa />} />
        <Route path="/FormIzin" element={<FormIzin />} />
        <Route path="/Piket" element={<Piket />} />
        <Route path="/FormSiswa" element={<FormSiswa />} />
        <Route path="/AbsenSiswa" element={<AbsenSiswa />} />
        <Route path="/Print/1" element={<Print1 />} />
        <Route path="/Print/4" element={<Print4 />} />
        <Route path="/Print/3" element={<Print3 />} />
        <Route path="/Print/2" element={<Print2 />} />
        <Route path="/AbsenGuru" element={<AbsenGuru />} />
        <Route path="/rekapguru" element={<rekapguru />} />

        <Route path="/EditSiswa/:id" element={<EditSiswa />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/GuruCreate" element={<GuruCreate />} />
        <Route path="/PiketCreate" element={<PiketCreate />} />
        <Route path="/SiswaCreate" element={<SiswaCreate />} />
        <Route path="/CreateSiswa" element={<CreateSiswa />} />
        <Route path="/KehadiranGuru" element={<KehadiranGuru />} />
        <Route path="/KehadiranSiswa" element={<KehadiranSiswa />} />
        <Route path="/guru" element={<Guru />} />
        <Route path="/izin" element={<FormIzin />} />
        <Route path="/siswa" element={<Siswa />} />
        <Route path="/jurusan" element={<jurusan />} />
        <Route path="/view" element={<View />} />
        <Route path="/absen" element={<FormAbsen />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
     
        <Route path="/user-details/2" element={<pplg />} />
        <Route path="/user-details/3" element={<animasi />} />
        <Route path="/user-details/4" element={<bcf />} />
        <Route path="/user-details/1" element={<to />} />
        <Route path="/user-details/5" element={<tpfl />} />
        <Route path="/class-details/1" element={<Otomotif />} />
        <Route path="/class-details/2" element={<Rpl />} />
        <Route path="/class-details/3" element={<Anim />} />
        <Route path="/class-details/4" element={<Broadcasting />} />
        <Route path="/class-details/5" element={<Tpfl />} />
      </Routes>
    </div>
  );
}

export default App;
