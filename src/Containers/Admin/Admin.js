import React, {Component} from 'react';
import axiosPages from "../../axios-pages";

class Admin extends Component {
    state = {
        pages: [],
        selectedPage: '',
        selectedPageTitle: '',
        selectedPageContent: ''
    };

    componentDidMount = async () => {
        const response = await axiosPages.get('/pages.json');
        this.setState({pages: Object.keys(response.data)});
    };

    changer = event => this.setState({[event.target.name]: event.target.value});

    pageRequest = async event => {
        this.setState({selectedPage : event.target.value});
        const response = await axiosPages.get('/pages/' + event.target.value + '.json');
        this.setState({
            selectedPageTitle: response.data.title,
            selectedPageContent: response.data.content
        });
    };

    editing = async event => {
        event.preventDefault();

        const page = {
            title: this.state.selectedPageTitle,
            content: this.state.selectedPageContent
        };


        const putting = await axiosPages.put('/pages/' + this.state.selectedPage + '.json', page);

        if (putting.statusText === 'OK') {
            this.setState({pages: [], selectedPage: null, selectedPageTitle: '', selectedPageContent: ''});
        } else {
            alert('Something did wrong');
        }
    };

    render() {
        return (
            <div className="card mb-3" style={{maxWidth: '900px', margin: '20px auto'}}>
                <div className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Edit Page</h5>
                    <form onSubmit={event => this.editing(event)}>
                        <div className="form-group">
                            <label style={{marginTop: '10px'}} htmlFor="selPage">Category</label>
                            <select
                                className="form-control"
                                id="selPage" name='selPage'
                                onChange={event => this.pageRequest(event)}>
                                <option></option>
                                {this.state.pages.map(page => (
                                    <option key={page}>{page}</option>
                                ))}
                            </select>
                            <label style={{marginTop: '10px'}} htmlFor="title">Title</label>
                            <input
                                name='selectedPageTitle'
                                type="text"
                                className="form-control"
                                id="title"
                                value={this.state.selectedPageTitle}
                                onChange={event => this.changer(event)}/>
                            <label style={{marginTop: '10px'}} htmlFor="text">Content</label>
                            <textarea
                                className="form-control"
                                id="text" rows="3"
                                name='selectedPageContent'
                                value={this.state.selectedPageContent}
                                onChange={event => this.changer(event)}
                            />
                            <button style={{marginTop: '14px'}} type="submit" className="btn btn-dark">Change</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Admin;