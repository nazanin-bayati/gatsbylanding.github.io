import React from "react"
import Layout from '../components/layout'
import "../styles/base.css"
import "../styles/grid.css"
import "../styles/style.css"
import Geometric from "../img/Geometric dream.svg"
import mamot from "../img/mamot.png"
import diba from "../img/dica-4d.png"
import monenco from "../img/MONENCT-4D.png"
import haftohasht from "../img/haftohasht.png"
import timepic from "../img/time.svg"
import scopepic from "../img/scope.svg"
import signpic from "../img/sign.svg"
import donepic from "../img/done.svg"
import differentPm from "../img/why-are-we-different-pm.svg"
import differentUserstory from "../img/why-are-we-different-user-story.svg"
import differentQa from "../img/why-are-we-different-qa.svg"
import differentMobileUserstory from "../img/different-mobile-user-story.svg"
import differentMobilePm from "../img/different-mobile-pm.svg"
import differentMobileQa from "../img/different-mobile-qa.svg"
import {graphql, useStaticQuery} from 'gatsby'


const pageQuery = graphql`
    {
        gcms {
            ongoingProjects {
                projectName
                startDay
                endDate
                price
                userStory
                description
                firstSkill
                secondSkill
            }
        }
    }
`

const IndexPage = () => {
    const {gcms: {ongoingProjects}} = useStaticQuery(pageQuery)
    return (
        <Layout>
            <div class="home-header-content">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-xs-6">
                            <img class="landing-main-image" src={Geometric}/>
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-xs-6 ">
                            <h1 class="header-text-landing">strings.main_text</h1>
                            <p class="paragraph-text-header-landing">strings.lead_text</p>
                            <a class="hire-button"
                               href="{{ ADDRESS }}/projects/submit/category">strings.lead_button_text</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trust-bar">
                <div class="container">
                    <div class="row">
                        <div class="trust-logo-container">
                            <div class="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-2">
                                <p class="trust-text">strings.trust_by</p>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
                                <img class="trust-logo" src={mamot} alt=""/>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
                                <img class="trust-logo" src={diba} alt=""/>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
                                <img class="trust-logo" src={monenco} alt=""/>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
                                <img class="trust-logo" src={haftohasht} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trust-bar-responsive">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 trust-text-responsive">
                            <p class="trust-text-responsive">strings.trust_by</p>
                        </div>
                    </div>
                    <div class="logo-responsive">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <img class="trust-logo-responsive" src={mamot} alt=""/>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6  ">
                                <img class="trust-logo-responsive" src={diba} alt=""/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <img class="trust-logo-responsive" src={monenco} alt=""/>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <img class="trust-logo-responsive" src={haftohasht} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 class="lead-text-box-2">
                                strings.projects_landing
                            </h2>
                            <div class="box-line"></div>
                        </div>
                    </div>
                    <div class="project-container-box">
                        <div class="container-fluid">
                            <div class="slider-button">
                                <button id="next-button"></button>
                            </div>
                            <div class="slider-button">
                                <button id="back-button"></button>
                            </div>

                            <div class="row">
                                {ongoingProjects.map(({slug, ...ongoingProject}) => (
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                        <div className="project-box">
                                            <h2 className="project-title">{ongoingProject.projectName}</h2>
                                            <div className="divider-line"></div>
                                            <div className="project-box-contents">
                                                <div className="project-duration">{ongoingProject.startDate}</div>
                                                <div className="project-budget">{ongoingProject.price}</div>
                                                <div className="project-user-story">{ongoingProject.userStory}</div>
                                                <div className="project-skill">
                                                    <div className="skill-tag">{ongoingProject.firstSkill}</div>
                                                    <div className="skill-tag">{ongoingProject.secondSkill}</div>
                                                </div>
                                                <p className="project-description">{ongoingProject.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <div class="project-box">
                                        <h2 class="project-title">POL: Web development</h2>
                                        <div class="divider-line"></div>
                                        <div class="project-box-contents">
                                            <div class="project-duration">3-6 month</div>
                                            <div class="project-budget">70 milion Toman</div>
                                            <div class="project-user-story">Available</div>
                                            <div class="project-skill">
                                                <div class="skill-tag">Node J.S</div>
                                                <div class="skill-tag">React</div>
                                            </div>
                                            <p class="project-description">A platform for institutions and lecturers to
                                                provide the audience their video courses in art topics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12"></div>
                    </div>
                </div>
            </div>
            <div class="how-it-works" id="howitworks">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 class="lead-text-box-2">
                                strings.box_one_title
                            </h2>
                            <div class="box-line"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div class="how-it-works-first-step">
                                    <div class="set">
                                        <div class="how-it-works-icon">
                                            <img src={timepic} alt=""/>
                                        </div>
                                        <h3 class="how-it-works-content">Set</h3>
                                        <p class="how-it-works-details">Set a meeting time. Feel comfortable to choose
                                            an
                                            appropriate time for a short meeting to talk about your project.</p>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div class="how-it-works-second-step">
                                    <div class="scope">
                                        <div class="how-it-works-icon">
                                            <img src={scopepic} alt=""/>
                                        </div>
                                        <h3 class="how-it-works-content">Scope</h3>
                                        <p class="how-it-works-details">Your product manager will help you clarify your
                                            scope of
                                            the project and write a comprehensive user story.</p>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div class="how-it-works-third-step">
                                    <div class="sign">
                                        <div class="how-it-works-icon">
                                            <img src={signpic} alt=""/>
                                        </div>
                                        <h3 class="how-it-works-content">Sign</h3>
                                        <p class="how-it-works-details">Step by step payments<br/>Safe<br/>Easy</p>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div class="how-it-works-fourth-step">
                                    <div class="project-done">
                                        <div class="how-it-works-icon">
                                            <img src={donepic} alt=""/>
                                        </div>
                                        <h3 class="how-it-works-content">Your project is done</h3>
                                        <p class="how-it-works-details">This is where we all reach.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="what-we-do">
                <div class="container">
                </div>
            </div>
            <div class="why-we-diffrent">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 class="lead-text-box-2">
                                Why are We Different
                            </h2>
                            <div class="box-line"></div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <img class="diffrent-1" src={differentPm} alt=""/>
                            <img class="diffrent-1" src={differentUserstory} alt=""/>
                            <img class="diffrent-1" id="qa" src={differentQa} alt=""/>
                            <img class="different-mobile" src={differentMobileUserstory} alt=""/>
                            <img class="different-mobile" src={differentMobilePm} alt=""/>
                            <img class="different-mobile" id="qa-mobile" src={differentMobileQa} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage