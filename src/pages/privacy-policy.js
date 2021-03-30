import React from "react"
import Layout from '../components/layout'
import "../styles/base.css"
import "../styles/grid.css"
import "../styles/style.css"

const IndexPage = () => {
    return (
    <Layout>
        <div class="privacy-content">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="header-privacy">Privacy and Policy</h1>
                        <p>Effective November 10, 2020 </p>
                        <div class="horizontal-line"></div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="introduction">Wishwork Website</h1>
                        <p>These Website Terms of Use ( <strong>“ToU”</strong> ) apply to your access and use of <a href="www.wishwork.org">www.wishwork.com</a> (the <strong>“Site”</strong> ),
                             including all software, data, reports, text, images, sounds, video,
                             and content made available through any portion of the Site (collectively, the <strong>“Content”</strong> ).
                             Content includes all such elements as a whole, as well as individual elements and portions thereof. </p>
                        <div class="horizontal-line"></div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="introduction">Acceptance of Terms</h1>
                        <p>Wishwork permits you ( <strong>“User”</strong> or <strong>“you”</strong>  or <strong>“your”</strong> ) to access and use the Site and Content, subject to these ToU. By accessing or using any portion of the Site,
                            you acknowledge that you have read, understood, and agreed to be bound by these ToU. If you are entering into these ToU on behalf of a company or other legal entity ( <strong>“User Entity”</strong> ),
                            you must have the legal authority to contractually bind such User Entity to these ToU, in which case the terms “you” or “your” or “User” will refer to such User Entity. If you lack such legal authority to contractually bind or you do not agree with these ToU,
                            you must not accept these ToU or access or use the site or content. </p>
                        <div class="horizontal-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default IndexPage