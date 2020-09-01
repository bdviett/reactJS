//component has form for submission new value.
import React, {Component} from 'react';
import DataService from "../services/DataService";

export default class AddComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveJob = this.saveJob.bind();
        this.newJob = this.newJob.bind();

        this.state = {
            id: null,
            title: null,
            description: null,
            published: false,
            submitted: false
        };
    }

    onChangeTitle(title) {
        this.setState({
            title: title.target.value
        });
    }

    onChangeDescription(description) {
        this.setState({
            description: description.target.value
        });
    }

    saveJob() {
        var data = {
            title: this.state.title,
            description: this.state.description
        };

        DataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    published: response.data.published,
                    submitted: true
                });
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    newJob() {
        this.setState({
            id: null,
            title: "",
            description: "",
            published: false,
            submitted: false
        });
    }

    render() {
        return(
          <div className="submit-form">
              {this.state.submitted ? (
                  <div>
                      <h4>
                          You submitted successfully !
                      </h4>

                      <button className="btn btn-success" onclick={this.newJob}>
                          Add
                      </button>
                  </div>
              ) : (
                  <div>
                      <div className="form-group">
                          <label htmlFor="title"></label>
                          <input
                              type="text"
                              className="form-control"
                              id="title"
                              required
                              value={this.state.title}
                              onchange={this.onChangeTitle}
                              name="title"
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <input
                              type="text"
                              className="form-control"
                              id="description"
                              required
                              value={this.state.description}
                              onChange={this.onChangeDescription}
                              name="description"
                          />
                      </div>
                      <button onClick={this.saveJob} className="btn btn-success">
                          Submit
                      </button>
                  </div>
              )}
          </div>
        );
    }
}