import React from "react";

import { SelectedLanguages } from "./SelectedLanguages";
import { Repos } from "./Repos";


export default class PopularPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: "All",           
            error: null,
        };
        this.selectLanguage = this.selectLanguage.bind(this);
        this.getError = this.selectLanguage.bind(this);
    }
   
    selectLanguage(language) {
        if (language !== this.state.selectedLanguage) {
            this.setState({ selectedLanguage: language });            
        }
    }

    getError(error) {
        this.setState({ error: error });
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
                <Repos
                    selectedLanguage={this.state.selectedLanguage}
                    getError={this.getError}
                />
            </div>
        );
    }
}
