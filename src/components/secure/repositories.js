import React, { Component } from 'react';
import Sidebar from '../layout/sidebar';
import '../css/repositories.css'
import { NotificationManager } from 'react-notifications';

export default class Repositories extends Component {
    copyToClipboard = () => {
        let item = "git clone peacegit@3.84.28.223:/home/peacegit.git"
        navigator.clipboard.writeText(item)
        NotificationManager.success('', 'Copied!', 2200);
    };
    render() {
        return (
            <div>
                <div>
                    <Sidebar />
                    <div className="custom-margin">
                        <div className="dashboard-heading">
                            <h2 className="page-heading text-center mb-4">Repositories</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-6 col-lg-4 col-xl-4 equel-grid">
                                <div className="grid d-flex flex-column align-items-center justify-content-center">
                                    <div className="grid-body text-center">
                                        <h2 className="font-weight-medium">
                                            <span className="animated-count">gfchjvbknlm;</span>
                                        </h2>
                                        <p className="text-gray d-block mt-3"> cgvhbjknl</p>
                                        <div className="row mb-3">
                                            <span> <input value="git clone peacegit@3.84.28.223:/home/peacegit/{{repo.reponame}}.git" readOnly />
                                                <button className="buttonnew" type="button" onClick={this.copyToClipboard}>Clone</button></span>
                                        </div>
                                        <div> <button className="btn add-btn-view"> View</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-6 col-lg-4 col-xl-4 equel-grid">
                                <div className="grid d-flex flex-column align-items-center justify-content-center">
                                    <div className="grid-body text-center">
                                        <h2 className="font-weight-medium">
                                            <span className="animated-count">gfchjvbknlm;</span>
                                        </h2>
                                        <p className="text-gray d-block mt-3"> cgvhbjknl</p>
                                        <div className="row mb-3">
                                            <span> <input value="git clone peacegit@3.84.28.223:/home/peacegit/{{repo.reponame}}.git" readOnly />
                                                <span><button className="buttonnew" type="button">Clone</button></span></span>
                                        </div>
                                        <div> <button className="btn add-btn-view"> View</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-6 col-lg-4 col-xl-4 equel-grid">
                                <div className="grid d-flex flex-column align-items-center justify-content-center">
                                    <div className="grid-body text-center">
                                        <h2 className="font-weight-medium">
                                            <span className="animated-count">gfchjvbknlm;</span>
                                        </h2>
                                        <p className="text-gray d-block mt-3"> cgvhbjknl</p>
                                        <div className="row mb-3">
                                            <span> <input value="git clone peacegit@3.84.28.223:/home/peacegit/{{repo.reponame}}.git" readOnly />
                                                <span><button className="buttonnew" type="button">Clone</button></span></span>
                                        </div>
                                        <div> <button className="btn add-btn-view"> View</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-6 col-lg-4 col-xl-4 equel-grid">
                                <div className="grid d-flex flex-column align-items-center justify-content-center">
                                    <div className="grid-body text-center">
                                        <h2 className="font-weight-medium">
                                            <span className="animated-count">gfchjvbknlm;</span>
                                        </h2>
                                        <p className="text-gray d-block mt-3"> cgvhbjknl</p>
                                        <div className="row mb-3">
                                            <span> <input value="git clone peacegit@3.84.28.223:/home/peacegit/{{repo.reponame}}.git" readOnly />
                                                <span><button className="buttonnew" type="button">Clone</button></span></span>
                                        </div>
                                        <div> <button className="btn add-btn-view"> View</button></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        );
    }
}