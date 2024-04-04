
//import react
import React, { lazy, Suspense } from 'react';

//import react router dom
import { Routes, Route } from "react-router-dom";

//import loader component
const Loader = lazy(() => import('../components/Loader.jsx'));

//import view Login
const Login = lazy(() => import('../views/Auth/Login.jsx'));

const LoginAdmin = lazy(() => import('../views/Auth/Login.jsx'));

import Create from "../components/UserCreate.jsx"
//import private routes

import Guru from "../components/DaftarGuru.jsx"

import KehadiranGuru from "../components/KehadiranGuru.jsx"

import KehadiranSiswa from "../components/KehadiranSiswa.jsx"

import View from "../components/UserView.jsx"
import CreateSiswa from "../components/SiswaCreate.jsx"

import Siswa from "../views/admin/siswa/DaftarSiswa.jsx"
import Profile from "../components/Profile.jsx"
import Kelas from "../views/admin/Jurusan/DaftarJurusan.jsx"
import pplg from "../views/admin/Kelas/pplg.jsx"


import Users from "../views/admin/DaftarUser.jsx"
//import view dashboard
const Dashboard = lazy(() => import('../views/Dashboard/Index.jsx'));

//import view permissions index
const PermissionsIndex = lazy(() => import('../views/Permissions/index.jsx'));

//import view roles index
const RolesIndex = lazy(() => import('../views/Roles/index.jsx'));

import Edit from "../components/EditUser.jsx"




export default function RoutesIndex() {

    return (
        <Routes>

            {/* route "/" */}
            <Route
                path="/"
                element={
                    <Suspense fallback={<Loader />}>
                        <Login />
                    </Suspense>
                }
            />

            {/* private route "/dashboard" */}
            <Route
                path="/dashboard"
                element={
                    <Suspense fallback={<Loader />}>
                        <PrivateRoutes>
                            <Dashboard />
                        </PrivateRoutes>
                    </Suspense>
                    
                }
            />
            
            

                {/* private route "/guru" */}
            <Route
                path="/KehadiranGuru"
                element={
                    <Suspense fallback={<Loader />}>
                        <PrivateRoutes>
                            <KehadiranGuru />
                        </PrivateRoutes>
                    </Suspense>
                    
                }
            />
                {/* private route "/guru" */}
            <Route
                path="/KehadiranSiswa"
                element={
                    <Suspense fallback={<Loader />}>
                        <PrivateRoutes>
                            <KehadiranSiswa />
                        </PrivateRoutes>
                    </Suspense>
                    
                }
            />
            
            
            <Route
                path="/siswa"
                element={
                    <Suspense fallback={<Loader />}>
                        <PrivateRoutes>
                            <Siswa />
                        </PrivateRoutes>
                    </Suspense>
                    
                }
            />
           
           
             

            {/* private route "/permissions" */}
            <Route
                path="/permissions"
                element={
                    <Suspense fallback={<Loader />}>
                        <PrivateRoutes>
                            <PermissionsIndex />
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            {/* private route "/roles" */}
            <Route
                path="/roles"
                element={
                    <Suspense fallback={<Loader />}>
                        <PrivateRoutes>
                            <RolesIndex />
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            
        </Routes>
    )
}