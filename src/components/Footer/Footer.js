import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <nav className={"bg-primary-purple shadow"} id={'footer'}>
            <div className={"w-screen px-6 sm:px-20 py-2 sm:py-3"}>
                <ul className={"flex justify-end mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"}>
                    <li>
                        <NavLink to="/privacyPolicy" className={"block py-2 pr-4 pl-3 text-[#D3CCDE] text-sm"}>Нууцлалын
                            бодлого</NavLink>
                    </li>
                    <li>
                        <a target={'_blank'} href="https://www.corexchain.io/"
                           className={"block py-2 pr-4 pl-3 text-[#D3CCDE] text-sm"}
                           aria-current="page">Powered by COREXCHAIN</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Footer;
