import React, {useState, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import './navbar.scss';
import github_icon from "../../assets/images/github_icon.svg";
import notly_logo from "../../assets/images/notly_logo.svg";
// import {LocaleContext} from "../../LocaleContext";


const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {dashboardUrl} = window.env;

    const location = useLocation();
    const {pathname} = location;

    useEffect(() => {
        setIsOpen(false);
    }, [location]);


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
            <div className={"w-screen md:px-24 px-8 flex flex-wrap justify-between items-center"}>

                <NavLink to={'/'} className={pathname === '/' ? 'invisible' : ''}>
                    <img src={notly_logo} className={"h-7"} alt={"Notly Logo"}/>
                </NavLink>

                <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle={"mobile-menu"} type="button"
                        className={"text-sm text-gray-300 rounded-lg md:hidden hover:text-white focus:outline-none"}
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
                    <ul className={"flex flex-col md:flex-row mt-4 md:space-x-8 md:mt-0 pt-3 font-medium"}>
                        <li className={'md:px-0 px-4 md:py-0 py-1'}>
                            <a target={'_blank'} href={'https://github.com/corex-mn/certify-sc.git'}
                               className={"flex flex-row text-white text-base block p-2"}>
                                <img className={'mr-1.5'} src={github_icon}/> Github
                            </a>
                        </li>
                        <li className={'md:px-0 px-10 md:py-0 py-1'}>
                            <a href={dashboardUrl + '/login'} className={"text-white text-base block p-2"}>Нэвтрэх</a>
                        </li>
                        <li className={'md:px-0 px-10 md:py-0 py-1'}>
                            <NavLink to="/partnersForm"
                                     className={"text-white text-base block p-2" + (isOpen ? "" : " ")}>Бүртгүүлэх</NavLink>
                        </li>
                        <li className={'md:px-0 px-10 md:py-0 py-2'}>
                            <a href={''} className={"text-white text-base border rounded-lg block px-6 py-2"}>Апп
                                татах</a>
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
