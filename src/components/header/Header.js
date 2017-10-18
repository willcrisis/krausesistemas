import React, {PureComponent} from 'react';
import './Header.scss';

export default class Header extends PureComponent {
    render() {
        return (
            <header className="masthead">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 id="homeHeading">Your Favorite Source of Free Bootstrap Themes</h1>
                        <hr />
                            <p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                    </div>
                </div>
            </header>
        )
    }
}