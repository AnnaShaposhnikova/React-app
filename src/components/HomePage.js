import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <div className="breadcrums">
                <div className="breadcrum-item">
                    <Link to="/popular">Popular</Link>
                </div>
                <div className="breadcrum-item">
                    <Link to="/battle">Battle</Link>
                </div>
            </div>
            <h1>Home</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ullamcorper erat ut nunc sollicitudin facilisis.
                Aliquam ullamcorper non nisl in aliquet. Sed accumsan augue
                euismod ullamcorper imperdiet. Vivamus fermentum ex eget ipsum
                varius, sed auctor purus pretium. Nulla aliquam dolor nec lorem
                sagittis dapibus. In pellentesque mi sit amet metus porttitor
                facilisis. Curabitur at elit finibus sem laoreet ultricies.
                Morbi vulputate eget nulla eu euismod. Nulla dui neque,
                tincidunt ac ligula lacinia, ornare venenatis tortor. Phasellus
                et auctor lorem, sed volutpat odio.{" "}
            </p>
            <p>
                Praesent quis eros at neque consectetur pellentesque. Vivamus
                tincidunt laoreet arcu, eget facilisis urna maximus at.
                Pellentesque ex odio, facilisis dictum iaculis vel, semper sit
                amet urna. Nunc congue vestibulum erat sit amet tempor. Morbi in
                rutrum felis. Nulla nisi sem, tristique varius tristique ac,
                varius id justo. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.{" "}
            </p>
            <p>
                Aliquam sit amet lacus imperdiet, commodo felis vel, eleifend
                dolor. Vestibulum aliquet ex id felis sodales consequat. Donec
                venenatis diam nec tortor porttitor, eu feugiat nisl hendrerit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Morbi arcu tortor, sagittis
                ac luctus vulputate, dapibus eget tellus. Sed vitae cursus
                tellus, et bibendum eros. Aliquam erat volutpat. Mauris finibus,
                enim non varius efficitur, magna neque euismod tellus, et
                viverra mauris mi nec tortor.
            </p>
            <p>
                Praesent scelerisque sem eget nisi condimentum lobortis. Ut nunc
                metus, pretium sit amet purus ut, ultrices imperdiet nulla.
                Mauris rutrum congue tristique. Praesent eget mi dignissim felis
                rhoncus sollicitudin eu at magna. Cras venenatis augue sed magna
                vestibulum porttitor. Suspendisse potenti. Aliquam ac elementum
                mauris. Nunc eros ligula, feugiat sed nisl ac, luctus cursus
                nisi. Suspendisse malesuada ante lectus, ac auctor quam
                venenatis vitae. Pellentesque in mi eu risus maximus dictum.
                Proin sed dictum arcu.
            </p>
        </div>
    );
};
