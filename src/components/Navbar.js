import React from 'react';
import '../index.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import {Cog6ToothIcon, UserIcon, ArrowLeftEndOnRectangleIcon, Bars3Icon} from '@heroicons/react/16/solid';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <label htmlFor="my-drawer"><Bars3Icon className='w-6 h-6'>Open drawer</Bars3Icon></label>
                <h1 className="text-2xl font-bold">Data Access Hub</h1>
                <nav className="flex items-center space-x-4">
                    <button onClick={() => changeLanguage('en')} className="px-4 py-2">EN</button>
                    <button onClick={() => changeLanguage('it')} className="px-4 py-2">IT</button>

                    <div className="dropdown dropdown-bottom dropdown-end">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-12 h-12 rounded-full cursor-pointer" tabIndex={0} />
                        
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black">
                            <li className="flex flex-row items-center space-x-2">
                                <a href="#" className='justify-center w-full'>
                                    <UserIcon className="w-6 h-6 text-gray-500"></UserIcon>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li className="flex flex-row items-center space-x-2">
                                <a href="#" className='justify-center w-full'>
                                    <Cog6ToothIcon className="w-6 h-6 fill-gray-500"/>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li className="flex flex-row items-center space-x-2">
                                <a href="#" className='justify-center w-full'>
                                    <ArrowLeftEndOnRectangleIcon className="w-6 h-6 text-red-500"></ArrowLeftEndOnRectangleIcon>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>

                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;
