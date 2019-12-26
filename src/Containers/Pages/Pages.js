import React, {Component} from 'react';
import axiosPages from "../../axios-pages";
import Page from "../../Components/Page/Page";
import './Pages.css';

class Pages extends Component {
    state = {
      page: ''
    };

    componentDidMount() {
        this.request('home');
    }

    request = async (title) => {
        const response = await axiosPages.get('/pages/' + title + '.json');
        this.setState({page: response.data});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.title !== this.props.match.params.title) {
            this.request(this.props.match.params.title);
        }
    }

    render() {
        return (
            <div className='container'>
                <Page
                    title={this.state.page.title}
                    content={this.state.page.content}
                />
            </div>
        );
    }
}

export default Pages;