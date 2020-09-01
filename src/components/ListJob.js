//component gets and displays data
import React, {Component} from 'react';
import DataService from "../services/DataService";
import {Link} from "react-router-dom";

export default class ListJob extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveJob = this.retrieveJob.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveJob = this.setActiveJob.bind(this);
        this.removeAllJob = this.removeAllJob.bind(this);
        this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            job: [],
            currentJob: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveJob() {
        DataService.getAll()
            .then(response => {
                this.setState({
                    job: response.data
                });
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    refreshList() {
        this.retrieveJob();
        this.setState({
            currentJob: null,
            currentIndex: -1
        });
    }

    setActiveJob(job, index) {
        this.setState({
            currentJob: job,
            currentIndex: index
        });
    }

    removeAllJob() {
        DataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const {searchTitle, job, currentJob, currentIndex} = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={searchTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4> Job List</h4>

                    <ul className="list-group">
                        {job &&
                        job.map((job, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveJob(job, index)}
                                key={index}
                            >
                                {job.title}
                            </li>
                        ))}
                    </ul>
                    <button className="m-3 btn btn-sm btn-danger" onClick={this.removeAllJob}>
                        Remove All
                    </button>
                </div>
                <div className="col-md-6">
                    {currentJob ? (
                        <div>
                            <h4>Job</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                                {currentJob.title}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentJob.description}
                            </div>
                            <div>
                                <label>
                                    <strong>Status:</strong>
                                </label>{" "}
                                {currentJob.published ? "Published" : "Pending"}
                            </div>

                            <Link
                                to={"/list/" + currentJob.id}
                                className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Job...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}