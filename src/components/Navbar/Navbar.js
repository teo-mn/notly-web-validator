import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import certifyLogo from '../../assets/images/certifyLogo.svg';
import './navbar.scss';
// import {LocaleContext} from "../../LocaleContext";


const Navbar:React.FC = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { dashboardUrl, headerHideItems } =  window.env;
    // const useLocale = () => useContext(LocaleContext);
    // const { locale, onChange } = useLocale();

    // const toggleLang = () => {
    //   if (locale === 'mn') {
    //     onChange('en');
    //     return;
    //   }
    //   onChange('mn');
    // };

    return (
        <nav className={"bg-primary-purple border-gray-200 py-4 drop-shadow-gray"} id={"home-navbar"}>
            <div className={"w-screen px-10 flex flex-wrap justify-between items-center"}>
    {/*          {*/}
    {/*            !headerHideItems.includes('logo') &&*/}
    {/*          <>*/}
    {/*            <NavLink to={'/'} className={'flex items-center'}>*/}
    {/*                <img src={window.env.headerLogoUrl ? window.env.headerLogoUrl : certifyLogo} className={"mr-3 h-7 md:h-9"} alt={"Notly Logo"}/>*/}
    {/*            </NavLink>*/}
    {/*            <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle={"mobile-menu"} type="button"*/}
    {/*                    className={"inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}*/}
    {/*                    aria-controls="mobile-menu" aria-expanded="false">*/}
    {/*                <span className={"sr-only"}>Open main menu</span>*/}

    {/*                {!isOpen ? (*/}
    {/*                    <svg className={"w-6 h-6"} fill={"currentColor"} viewBox={"0 0 20 20"}*/}
    {/*                         xmlns={"http://www.w3.org/2000/svg"}>*/}
    {/*                        <path fillRule={"evenodd"}*/}
    {/*d={"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"}*/}
    {/*clipRule={"evenodd"}/>*/}
    {/*                    </svg>*/}
    {/*                ) : (*/}
    {/*                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 x-icon" fill="none"*/}
    {/*                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">*/}
    {/*                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>*/}
    {/*                    </svg>*/}
    {/*                )}*/}
    {/*            </button>*/}
    {/*          </>*/}
    {/*          }*/}

                <div className={"md:block md:w-auto" + (isOpen ? " flex w-full burger-menu-wrapper" : " hidden")}
                     id={"mobile-menu"}>
                    <ul className={"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium"}>

                      {
                        window.env.isOnPremise && <li>
                          <a className={'uppercase block py-2 text-sm font-medium'} href='https://certify.mn' target='_blank' rel="noopener noreferrer"> CERTIFY.MN</a>
                        </li>
                      }

                      { !headerHideItems.includes('about') &&
                        <li className={'relative'}>
                            <NavLink to="/about" className={'uppercase block py-2 text-white text-sm font-medium'}>Бидний тухай</NavLink>
                        </li>
                      }

                      {
                        !headerHideItems.includes('partners') &&
                        <li className={'relative'}>
                            <NavLink to="/partners" className={'uppercase block py-2 text-white text-sm font-medium'}>Байгууллагууд</NavLink>
                        </li>

                      }
                      {
                        !headerHideItems.includes('login') &&
                        <li>
                            {window.env.isLoginAllowed &&  <a href={ dashboardUrl + '/login' }
                               className={"signing text-white block px-2 py-2 rounded-md uppercase" + (isOpen ? " sign-btn-block left-1/2 -translate-x-1/2" : " ")}>Нэвтрэх</a>}
                        </li>
                      }
                        <li className={'flex items-center rounded-md !ml-2'}>
                          {!window.env.isOnPremise &&
                          <NavLink to="/partnersForm" className={"signup uppercase text-sm font-medium cursor-pointer py-2 px-4 text-primary-yellow" + (isOpen ? " sign-btn-block-register left-1/2 -translate-x-1/2" : " ")}>Бүртгүүлэх</NavLink>}
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
