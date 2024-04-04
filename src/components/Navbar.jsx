import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../api';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import "./navbar.css"
export default function Navbar() {
    const navigate = useNavigate();

    const logout = async (e) => {
        e.preventDefault();

        await Api.post('/api/logout')
            .then(() => {
                Cookies.remove('user');
                Cookies.remove('token');
                Cookies.remove('permissions');

                toast.success('Logout Successfully!', {
                    position: "top-right",
                    duration: 4000,
                });

                navigate('/');
            });
    }

    const user = JSON.parse(Cookies.get('user'));

    useEffect(() => {
        // Enable Bootstrap dropdown for both the span and img
        const dropdownToggleSpan = document.querySelector('.navbar .dropdown-toggle-span');
        const dropdownToggleImg = document.querySelector('.navbar .dropdown-toggle-img');
        const dropdownMenu = document.querySelector('.navbar .dropdown-menu');

        const handleDropdownToggle = () => {
            dropdownMenu.classList.toggle('show');
        };

        dropdownToggleSpan.addEventListener('click', handleDropdownToggle);
        dropdownToggleImg.addEventListener('click', handleDropdownToggle);

        document.addEventListener('click', (e) => {
            if (!dropdownToggleSpan.contains(e.target) && !dropdownToggleImg.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });

        return () => {
            dropdownToggleSpan.removeEventListener('click', handleDropdownToggle);
            dropdownToggleImg.removeEventListener('click', handleDropdownToggle);

            document.removeEventListener('click', (e) => {
                if (!dropdownToggleSpan.contains(e.target) && !dropdownToggleImg.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    dropdownMenu.classList.remove('show');
                }
            });
        };
    }, []);

    return (
        <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
            <div className="container-fluid px-0">
                <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
                    <div className="d-flex align-items-center"></div>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item dropdown ms-lg-3">
                            <span
                                className="nav-link dropdown-toggle-span pt-1 px-0"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="media d-flex align-items-center">
                                    <img
                                        className="avatar rounded-circle dropdown-toggle-img"
                                        alt="Image placeholder"
                                        src={`https://ui-avatars.com/api/?name=${user.name}&amp;background=31316a&amp;color=ffffff&amp;size=100`}
                                    />
                                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                        <span className="mb-0 font-small fw-bold text-gray-900">{user.name}</span>
                                    </div>
                                </div>
                            </span>
                            <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1 border-0 shadow">
    <Link to="/profile" className="dropdown-item d-flex align-items-center">
        <svg className="dropdown-icon me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Ganti dengan ikon atau elemen SVG yang sesuai untuk profile */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
        </svg>
        Profile
    </Link>
    <Link to="/dashboard" onClick={logout} className="dropdown-item d-flex align-items-center">
        <svg className="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
        Logout
    </Link>
</div>
                            <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1 border-0 shadow">
                                <Link to="/dashboard" onClick={logout} className="dropdown-item d-flex align-items-center">
                                    <svg className="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                    </svg>
                                    Logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
