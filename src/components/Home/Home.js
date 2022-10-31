import React from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import {hot} from 'react-hot-loader';
import CoreValidator from '../../CoreValidator';
import Modal from '../../components/Modal';

import type {IntlProps} from '../../App';
import {injectIntl} from "react-intl";
import notlyLogo from "../../assets/images/notly_logo.svg";
import {NavLink} from "react-router-dom";

class Home extends React.Component<IntlProps> {
    state = {
        loading: false,
        preError: null,
        result: null,
        error: null,
        modalOpen: false,
        pdf: null
    };

    validateJS = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.setState({pdfArrayBuffer: e.target.result, modalOpen: true});
        };

        reader.readAsArrayBuffer(file);
    }

    processPDF = (acceptedFiles) => {
        if (!acceptedFiles.length) {
            const preError = 'Not a valid PDF file';
            console.error(preError);
            this.setState({preError});
            return;
        }
        if (acceptedFiles.length > 1) {
            const preError = 'You can only validate one file at a time';
            console.error(preError);
            this.setState({preError});
            return;
        }

        this.setState({loading: true, preError: null});

        this.validateJS(acceptedFiles[0]);
    }

    cleanUp = () => {
        this.setState({
            result: null,
            error: null,
            loading: false,
            pdf: null
        });
    }

    closeModal = () => {
        this.setState({modalOpen: false});
        this.cleanUp();
    }

    translate = (id) => id ? this.props.intl.formatMessage({id}) : id;

    render() {
        return (
            <div className={'bg-primary-purple'}>
                <div className={'container mx-auto flex justify-center py-28'} id={'main-container'}>
                    <div className={'flex flex-col'}>
                        <NavLink to={'/'} className={'flex justify-center mt-12'}>
                            <img src={notlyLogo} className={"mr-3 sm:w-72 w-48 mb-20"} alt={"Notly Logo"}/>
                        </NavLink>
                        <div className={'dropzone-field bg-white sm:px-14 px-6 sm:py-11 py-8 rounded'}>
                            <Dropzone className={'drag-and-drop cursor-pointer h-16 '} onDrop={this.processPDF}
                                      multiple={false} accept="application/pdf">
                                {({getRootProps, getInputProps, isDragActive}) => (
                                    <div {...getRootProps()}
                                         className={classNames('dropzone', {'hover': isDragActive})}>
                                        <input id='pdf_dropzone' className={''} {...getInputProps()} />
                                        {
                                            isDragActive ?
                                                <div
                                                    className='pdf_dropzone bg-white text-gray-500 sm:text-base text-xs ml-5 sm:p-4 p-2 lg:w-[786px] sm:w-[474px] w-[278px] rounded'>Файл
                                                    (drag & drop)</div> :
                                                <div className={'pdf_uploadzone flex'}>
                                                    <div
                                                        className={'sm:p-4 p-2 bg-white rounded-l-lg lg:w-[600px] sm:w-72 w-36'}>
                                                        <span className={'sm:text-base text-xs text-gray-500 ml-1'}>Файл оруулах хэсэг</span>
                                                    </div>
                                                    <span
                                                        className={'text-white bg-primary-pink uppercase sm:text-base text-xs font-medium sm:py-4 pb-2 pt-3 sm:px-5 px-3 rounded-r-lg'}>Шалгах</span>
                                                </div>
                                        }
                                    </div>
                                )}
                            </Dropzone>
                        </div>
                        <div className={'flex justify-center text-center text-[#8B7AA6] font-normal my-8 text-xl uppercase'}>
                            <span>Дижитал өмч</span>
                            <div className={'h-1 w-1 mt-3 mx-6 bg-[#8B7AA6] rounded-full'}></div>
                            <span>Дижитал диплом</span>
                            <div className={'h-1 w-1 mt-3 mx-6 bg-[#8B7AA6] rounded-full'}></div>
                            <span>Дижитал үнэмлэх</span>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalOpen}
                    closeModal={this.closeModal}
                    body={
                        <CoreValidator
                            pdfArrayBuffer={this.state.pdfArrayBuffer}
                            contactName={this.props.contactName}
                            contactEmail={this.props.contactEmail}
                            organization={this.props.organization}
                            docType={this.props.docType}
                            blockchainServices={this.props.blockchainServices}
                            closeFunction={this.closeModal}
                        />
                    }
                />
            </div>
        );
    }
}

Home.defaultProps = {
    blockchainServices: {
        'corex': {
            requiredSuccesses: 1,
            services: [{
                name: process.env.REACT_APP_SERVICE_NAME,
                url: process.env.REACT_APP_SERVICE_URI
            }]
        }
    }
};

export default injectIntl(hot(module)(Home));
