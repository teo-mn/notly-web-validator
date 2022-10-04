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
            <div className="App">
                <div className={'container mx-auto pt-24 flex justify-center'} id={'main-container'}>
                    <div className={'flex flex-col'}>
                        <NavLink to={'/'} className={'flex justify-center'}>
                            <img src={notlyLogo} className={"mr-3 w-72"} alt={"Notly Logo"}/>
                        </NavLink>

                        <div className={'dropzone-field bg-white px-14 py-11 rounded'}>
                            <Dropzone className={'drag-and-drop cursor-pointer bg-amber-600 border border-amber-700 h-16 '} onDrop={this.processPDF}
                                      multiple={false} accept="application/pdf">
                                {({getRootProps, getInputProps, isDragActive}) => (
                                    <div {...getRootProps()}
                                         className={classNames('dropzone', {'hover': isDragActive})}>
                                        <input id='pdf_dropzone' className={''} {...getInputProps()} />
                                        {
                                            isDragActive ?
                                                <div className='pdf_dropzone bg-white text-gray-500 text-base ml-5 p-4 w-[786px] rounded'>Файл (drag & drop)</div> :
                                                <div className={'pdf_uploadzone flex'}>
                                                    <div className={'p-4 bg-white rounded-l-lg w-[600px]'}>
                                                        <span className={'text-base text-gray-500 ml-5'}>Файл оруулах хэсэг</span>
                                                    </div>
                                                    <span className={'dropzone-btn text-white bg-primary-pink uppercase text-base font-medium py-4 px-5 rounded-r-lg'}>Баталгаажуулах</span>
                                                </div>
                                        }
                                    </div>
                                )}
                            </Dropzone>
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
