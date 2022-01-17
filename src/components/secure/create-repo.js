import React, { Component } from 'react';
import '../css/createrepo.css';
import Sidebar from '../layout/sidebar';

export default class CreateRepo extends Component {
    constructor(props) {
        super(props);
        this.routeto = this.routeto.bind(this);
    }
    routeto() {
        this.props.history.push('/repositories');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Sidebar />
                    <div className="custom-margin">
                        <div> <button className="btn gradbtn float-right mb-3" onClick={this.routeto}>Check Repositories</button></div>
                        <div className="dashboard-heading">
                            <h2 className="page-heading text-center mb-4">Create Repository</h2>
                        </div>
                        <div className="buytoken-form card mt-2">
                            <div className="mb-2">
                                <form className="needs-validation" >
                                    <div className="form">
                                        <div className="col">
                                            <h3 className="mb-5">Fill Details </h3>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Repository Name :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" placeholder="Choose name" className="form-control" name="address"
                                                        required />

                                                    {/* <p className="war">Name already used !!</p> */}

                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Access Type :</label>
                                                <div className="col-sm-8">
                                                    <select className="form-control paddingoff" name="privacytype" id="privacytype"
                                                        required>
                                                        <option disabled> Type</option>
                                                        <option value="public"> Public</option>
                                                        <option value="private"> Private</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Add user :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" placeholder="" className="form-control" name="adduser" required />

                                                </div>
                                            </div>

                                        </div>
                                        <button type="button" className="btn gradbtn btn-block mt-5">
                                            Create
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
