import React, { memo, useState } from "react";
import { Spinner } from "../spinner/Spinner";
import { FetchPopularRepos } from "../../utils/api";

export const Repos = memo(({ selectedLanguage, getError }) => {
    console.log("repos render");

    const [repos, setRepos] = useState(null);  
    const [language, setLanguage]  = useState(null);

    console.log("language", selectedLanguage);

    function fetchHandler(language) {
    FetchPopularRepos(language)
        .then((data) => {
            setRepos(data);
            getError(null);
            setLanguage(language)
        })
        .catch((error) => {
            getError(error.message);
        });
    }
    if(language !==selectedLanguage){
         fetchHandler(selectedLanguage);
    }  

    if (!repos) {       
        return <Spinner />;
    } else {
        return (
            <ul className="popular-list">
                {repos.map((repo, index) => {
                    return (
                        <li key={repo.id} className="popular-item">
                            <div className="popular-rank">#{index + 1}</div>
                            <ul className="space-list-items ">
                                <li>
                                    <img
                                        className="avatar"
                                        src={repo.owner.avatar_url}
                                        alt="repo_avatar"
                                    ></img>
                                </li>
                                <li>
                                    <a href={repo.html_url}>{repo.name}</a>
                                </li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.owner.stargazers_counter}</li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        );
    }
});
