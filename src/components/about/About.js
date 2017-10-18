import React, {PureComponent} from 'react';
import './About.scss';

export default class About extends PureComponent {
    render() {
        return (
            <section className="bg-primary" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading text-white">We've got what you need!</h2>
                            <hr className="light"/>
                            <p className="text-faded">Start Bootstrap has everything you need to get your new website up
                                and running in no time! All of the templates and themes on Start Bootstrap are open
                                source, free to download, and easy to use. No strings attached!</p>
                            <a className="btn btn-default btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}