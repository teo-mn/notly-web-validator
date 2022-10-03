import React from 'react';
import pdfIcon from "../../../assets/images/customIcons/pdficon.svg";
import certifyIcon from "../../../assets/images/customIcons/certifyicon.png";
import verifiedIcon from "../../../assets/images/customIcons/verifiedicon.png";
import AboutCard from "../AboutCard/AboutCard";

const AboutUs = () => {
    const data = [
        {
            no: '01',
            img: pdfIcon,
            title: 'Диплом сертификат',
        },
        {
            no: '02',
            img: certifyIcon,
            title: 'CERTIFY.MN'
        },
        {
            no: '03',
            img: verifiedIcon,
            title: 'Баталгаажсан мэдээлэл'
        },
    ];
    return (
        <div>
            <section className={"xl:container h-[70vh] mx-auto mt-28 sm:mt-40 mb-12 sm:mb-16 px-10"}>
                <h1 className={'text-2xl sm:text-4xl font-bold font-secondary'}><span
                    className={'font-secondary text-2xl sm:text-4xl text-primary-yellow'}>CERTIFY</span> гэж юу вэ?</h1>
                <h5 className={'text-l sm:text-2xl text-secondary-purple my-8 sm:my-14 text-justify'}>
                    CERTIFY нь блокчэйн технологид суурилан их, дээд сургуулийн диплом, гэрчилгээ, сертификат зэргийг дараах 3 алхмаар
                    баталгаажуулах боломжийг бүрдүүлж байгаа:

                </h5>

                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}>
                    {data.map((props, idx) =>
                        <AboutCard key={idx} {...props}/>
                    )}
                </div>
            </section>

            {/*<div className={'w-full px-10 h-96 partners drop-shadow-gray'}>*/}
            {/*    <h1 className={'font-medium uppercase mb-6 text-2xl sm:text-3xl text-center font-secondary pt-24 pb-16'}>Ашиглаж*/}
            {/*        буй байгууллагууд</h1>*/}
            {/*    <div className={'flex justify-center'}>*/}
            {/*        <img src={numlogo} className={"h-16"} alt={"Num_logo"}/>*/}
            {/*        <img src={mustlogo} className={"h-16 px-8 sm:px-20"} alt={"Must_logo"}/>*/}
            {/*        <img src={ufelogo} className={"h-16 "} alt={"Ufe_logo"}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<section className={"xl:container mb-16 mx-auto mt-16 sm:mt-32 px-10"}>*/}
            {/*    /!*<div className={'grid grid-cols-1 lg:grid-cols-2 gap-4 relative'}>*!/*/}
            {/*    /!*    /!*<div*!/*!/*/}
            {/*    /!*    /!*    className={'info-box-left w-72 sm:w-112 text-white p-7 sm:p-16 max-w-lg place-self-center lg:place-self-end min-h-fit sm:min-h-full flex flex-col'}>*!/*!/*/}
            {/*    /!*    /!*    <h4 className={'text-l sm:text-[26px] uppercase font-secondary mb-10 font-bold'}>Яагаад блокчэйн*!/*!/*/}
            {/*    /!*    /!*        гэж...</h4>*!/*!/*/}
            {/*    /!*    /!*    <ul className={'text-l sm:text-2xl list-decimal uppercase font-normal  ml-6 sm:mx-auto'}>*!/*!/*/}
            {/*    /!*    /!*        <li>Итгэлцэл</li>*!/*!/*/}
            {/*    /!*    /!*        <li>Тархмал бүтэц</li>*!/*!/*/}
            {/*    /!*    /!*        <li>Аюулгүй байдал, нууцлал</li>*!/*!/*/}
            {/*    /!*    /!*        <li>Хувиршгүй байдал</li>*!/*!/*/}
            {/*    /!*    /!*        <li>Инновац</li>*!/*!/*/}
            {/*    /!*    /!*    </ul>*!/*!/*/}
            {/*    /!*    /!*</div>*!/*!/*/}
            {/*    /!*    /!*<div*!/*!/*/}
            {/*    /!*    /!*    className={'relative info-box-right w-72 sm:w-112 bg-primary-purple text-white p-7 sm:p-16 text-left max-w-lg place-self-center lg:place-self-start min-h-full'}>*!/*!/*/}
            {/*    /!*    /!*    <div className={'card-asset'}></div>*!/*!/*/}
            {/*    /!*    /!*    <p className={'text-base sm:text-lg font-normal mb-5'}>Блокчэйн гэдэг нь сүлжээнд бичигдэж буй*!/*!/*/}
            {/*    /!*    /!*        мэдээллийг хакердаж, өөрчлөх боломжгүйгээр хадгалах, бүртгэх боломжийг олгодог дэд бүтэц*!/*!/*/}
            {/*    /!*    /!*        юм.</p>*!/*!/*/}
            {/*    /!*    /!*    <p className={'text-base sm:text-lg'}>*!/*!/*/}
            {/*    /!*    /!*        Үндсэндээ сүлжээнд оролцож буй бүхий л компьютер болон сүлжээний хэрэглэгчдийн тусламжтай*!/*!/*/}
            {/*    /!*    /!*        тухайн мэдээллийг тараан байршуулж баталгаажуулах*!/*!/*/}
            {/*    /!*    /!*        цахим (дижитал) бүртгэлийн дэд бүтэц юм. Тийм ч учраас төвлөрсөн бус буюу тархмал дэд бүтэц*!/*!/*/}
            {/*    /!*    /!*        гэдгээрээ онцлог юм.*!/*!/*/}
            {/*    /!*    /!*    </p>*!/*!/*/}
            {/*    /!*    /!*</div>*!/*!/*/}
            {/*    /!*</div>*!/*/}

            {/*    /!*<h1 className={'text-2xl sm:text-3xl mt-16 sm:mt-32 mb-11 font-secondary font-bold text-center uppercase'}>Баталгаажуулагч*!/*/}
            {/*    /!*    байгууллагаар элсэх</h1>*!/*/}

            {/*    /!*<div className={'connect-btn border border-primary-yellow mb-20 p-1 static mx-auto'}>*!/*/}
            {/*    /!*    <a href={'tel: +97676008822'} className={'text-base bg-primary-yellow text-white font-medium px-8 py-6 absolute'}>*!/*/}
            {/*    /!*        +976 76008822*!/*/}
            {/*    /!*    </a>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</section>*/}
        </div>
    )
}

export default AboutUs;
