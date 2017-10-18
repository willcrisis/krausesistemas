import React, {PureComponent} from 'react';
import './CallToAction.scss';

export default class CallToAction extends PureComponent {
    render() {
        return (
            <div className="call-to-action bg-dark">
                <div className="container text-center">
                    <h2>Free Download at Start Bootstrap!</h2>
                    <a className="btn btn-default btn-xl sr-button" href="http://startbootstrap.com/template-overviews/creative/">Download Now!</a>
                </div>
            </div>
        );
    }
}