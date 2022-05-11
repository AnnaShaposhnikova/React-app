import React from "react";
import { FetchPopularRepos } from "../../utils/api";
import { SelectedLanguages } from "./SelectedLanguages";
import { Repos } from "./Repos";



export default class PopularPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: "All",
            repos: null,
            error: null,
        };
        this.selectLanguage = this.selectLanguage.bind(this);
    }

    componentDidMount() {
        this.fetchHandler(this.state.selectedLanguage);
    }

    selectLanguage(language) {
        if (language !== this.state.selectedLanguage && this.state.repos) {
            this.setState({ selectedLanguage: language, repos: null });
            this.fetchHandler(language);
        }
    }         

    fetchHandler(language) {
        FetchPopularRepos(language)
            .then((data) => {
                this.setState({
                    selectedLanguage: language,
                    repos: data,
                    error: null,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.message,
                });
            });
    }

    render() {
        console.log("popular render");

        if (this.state.error) {
            return <h1>{this.state.error}</h1>;
        }
       
             return (
                 <div>
                     <SelectedLanguages
                         selectedLanguage={this.state.selectedLanguage}
                         selectLanguageHandler={this.selectLanguage}
                     />
                     <Repos repos={this.state.repos} />
                 </div>
             );        
    }
}
