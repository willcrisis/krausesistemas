import React, {PureComponent} from 'react';
import './Portifolio.scss';
import fullsize1 from'../../img/portfolio/fullsize/1.jpg';
import fullsize2 from'../../img/portfolio/fullsize/2.jpg';
import fullsize3 from'../../img/portfolio/fullsize/3.jpg';
import fullsize4 from'../../img/portfolio/fullsize/4.jpg';
import fullsize5 from'../../img/portfolio/fullsize/5.jpg';
import fullsize6 from'../../img/portfolio/fullsize/6.jpg';
import thumb1 from '../../img/portfolio/thumbnails/1.jpg';
import thumb2 from '../../img/portfolio/thumbnails/2.jpg';
import thumb3 from '../../img/portfolio/thumbnails/3.jpg';
import thumb4 from '../../img/portfolio/thumbnails/4.jpg';
import thumb5 from '../../img/portfolio/thumbnails/5.jpg';
import thumb6 from '../../img/portfolio/thumbnails/6.jpg';

export default class Portifolio extends PureComponent {
    render() {
        return (
            <section className="p-0" id="portfolio">
                <div className="container-fluid">
                    <div className="row no-gutter popup-gallery">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={fullsize1}>
                                <img className="img-fluid" src={thumb1} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={fullsize2}>
                                <img className="img-fluid" src={thumb2} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={fullsize3}>
                                <img className="img-fluid" src={thumb3} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={fullsize4}>
                                <img className="img-fluid" src={thumb4} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={fullsize5}>
                                <img className="img-fluid" src={thumb5} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href={fullsize6}>
                                <img className="img-fluid" src={thumb6} alt=""/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}