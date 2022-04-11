import React from "react";
import { Link } from "react-router-dom";

export const BattlePage = ()=>{
    return (
        <div>
            <div className="breadcrums">
                <div className="breadcrum-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="breadcrum-item">
                    <Link to="/popular">Popular</Link>
                </div>
            </div>
            <h1>Battle</h1>
            <div>
                <img src="./static/img/2.jpg"></img>
            </div>
            <p>
                Penguins (order Sphenisciformes /sfɪˈnɪsɪfɔːrmiːz/, family
                Spheniscidae /sfɪˈnɪsɪdiː/) are a group of aquatic flightless
                birds. They live almost exclusively in the southern hemisphere:
                only one species, the Galápagos penguin, is found north of the
                Equator. Highly adapted for life in the water, penguins have
                countershaded dark and white plumage and flippers for swimming.
                Most penguins feed on krill, fish, squid and other forms of sea
                life which they catch while swimming underwater. They spend
                roughly half of their lives on land and the other half in the
                sea.
            </p>
            <p>
                Although almost all penguin species are native to the southern
                hemisphere, they are not found only in areas with cold climates,
                such as Antarctica. In fact, only a few species of penguin live
                that far south. Several species are found in the temperate zone,
                and one species, the Galápagos penguin, lives near the Equator.
            </p>
        </div>
    );
}