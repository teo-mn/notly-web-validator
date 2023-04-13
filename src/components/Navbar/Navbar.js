import React, {useState, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import './navbar.scss';
import github_icon from "../../assets/images/github_icon.svg";
import notly_logo from "../../assets/images/notly_logo.svg";
// import {LocaleContext} from "../../LocaleContext";
import { useTranslation } from 'react-i18next';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {dashboardUrl , signupUrl} = window.env;
    const [lng , uselng] = useState(localStorage.getItem('language') || 'mn')
    const { t,i18n } = useTranslation();
    
    const location = useLocation();
    const {pathname} = location;
    
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    
    const handleChangeLanguage = (lng) => {
      i18n.changeLanguage(lng).then((r) => console.info(r));
      uselng(lng);
      localStorage.setItem('language', lng);
    }
    

    return (
        <nav className={"bg-primary-purple border-gray-200 py-8 drop-shadow-gray h-[98px]"} id={"home-navbar"}>
            <div className={"w-screen md:px-24 px-8 flex flex-wrap justify-between items-center"}>

                <NavLink to={'/'} className={pathname === '/' ? 'invisible' : ''}>
                    <img src={notly_logo} className={"h-7"} alt={"Notly Logo"}/>
                </NavLink>

                <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle={"mobile-menu"} type="button"
                        className={"text-sm py-2 text-gray-300 rounded-lg md:hidden hover:text-white focus:outline-none"}
                        aria-controls="mobile-menu" aria-expanded="false">
                    <span className={"sr-only"}>Open main menu</span>
                    {!isOpen ? (
                        <svg className={"w-6 h-6"} fill={"currentColor"} viewBox={"0 0 20 20"}
                             xmlns={"http://www.w3.org/2000/svg"}>
                            <path fillRule={"evenodd"}
                                  d={"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"}
                                  clipRule={"evenodd"}/>
                        </svg>
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 x-icon" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    )}
                </button>

                <div className={"md:block md:w-auto" + (isOpen ? " flex w-full burger-menu-wrapper" : " hidden")}
                     id={"mobile-menu"}>
                    <ul className={"flex flex-col md:flex-row md:space-x-8 font-medium"}>
                        <li className={'md:px-0 px-4 md:py-0 py-1'}>
                            <a target={'_blank'} href={'https://github.com/corex-mn/certify-sc.git'}
                               className={"flex flex-row text-white text-base block p-2"}>
                                <img className={'mr-1.5'} src={github_icon} alt='github'/> {t('navbar.source.code')}
                            </a>
                        </li>
                        <li className={'md:px-0 px-10 md:py-0 py-1'}>
                            <a href={dashboardUrl + '/login'} className={"text-white text-base block p-2"}>{t('navbar.login')}</a>
                        </li>
                        <li className={'md:px-0 px-10 md:py-0 py-1'}>
                            <a href={signupUrl} className={"text-white text-base block p-2"}>{t('navbar.signup')}</a>
                        </li>
                        <li className={'md:px-0 px-10 md:py-0 py-2'}>
                            <NavLink to="/downloadApp" className={"text-white text-base border rounded-lg block px-6 py-2"}>{t('navbar.download.app')}</NavLink>
                        </li>
                        <li className="flex items-center ">
                            {lng === 'en' && <button onClick={()=>handleChangeLanguage('mn')} className="text-white text-base  block px-2 py-2">mn</button>}
                            {lng === 'mn' && <button onClick={()=>handleChangeLanguage('en')} className="text-white text-base   block px-2 py-2">en</button>}
                        </li>
                        {/*language*/}
                        {/*<li className={'flex items-center w-10'}>*/}
                        {/*    <span className={'uppercase text-sm font-medium cursor-pointer'} onClick={() => { toggleLang(); }}>{ locale }</span>*/}
                        {/*</li>*/}

                    </ul>
                </div>

            </div>
        </nav>
    )
}
export default Navbar;
