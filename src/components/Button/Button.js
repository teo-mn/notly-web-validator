import React from 'react';

const Footer = () => {
  return (
    <nav className={"bg-white"} id={'footer'}>
        <div className={"w-screen px-6 sm:px-16 py-2 sm:py-5"}>
            <ul className={"flex justify-end mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"}>
                <li>
                    <a href="https://dashboard.certify.mn/privacy-policy"
                       className={"block py-2 pr-4 pl-3 text-white text-sm rounded md:bg-transparent"}
                       aria-current="page">Нууцлалын бодлого</a>
                </li>
                <li>
                    <a href="#"
                       className={"block py-2 pr-4 pl-3 text-white text-sm rounded md:bg-transparent"}
                       aria-current="page">Powered by COREXCHAIN</a>
                </li>
            </ul>
        </div>
    </nav>
)
}

export default Footer;
