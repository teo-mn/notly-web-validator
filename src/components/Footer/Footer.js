import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <nav className={"shadow"} id={'footer'}>
            <div className={"bg-primary-purple w-screen px-6 sm:px-20 py-3"}>
                <ul className={"flex justify-end md:flex-row md:space-x-8 md:text-sm md:font-medium"}>
                    <li>
                        <NavLink to="/privacyPolicy" className={"block py-2 pr-4 pl-3 text-[#D3CCDE] text-sm"}>Нууцлалын
                            бодлого</NavLink>
                    </li>
                    <li>
                        <a target={'_blank'} href="https://www.teo.mn/"
                           className={"block py-2 pr-4 pl-3 text-[#D3CCDE] text-sm"}
                           aria-current="page">Powered by TEO blockchain</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Footer;
