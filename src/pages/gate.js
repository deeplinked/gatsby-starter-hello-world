import React from 'react';
import Layout from '../components/layout';

const gatePage = () => {
    return(
        <Layout>
            <div class="columns">
            <div class="column is-8">
            <h1 class="title">
                G.A.T.E (2020-21)
            </h1>
            <p class="subtitle is-6">Graduate Aptitude Test in Engineering</p>
            </div>
            <div class="column is-4">
            <div class="pricing-table">
            <div class="pricing-plan is-active">
                <div class="plan-header">EEE & ECE</div>
                <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">₹</span>10,250</span></div>
                <div class="plan-items">
                <div class="plan-item">
                    <h5>timings</h5>
                    <p>Weekdays(6pm to 9pm)</p>
                    <p>Weekends (Full days)</p>
                </div>
                <div class="plan-item">
                    <h5>duration</h5>
                    <p>Gate 2020 (5 months)</p>
                    <p>GATE 2021 (18 months)</p>
                </div>
                <div class="plan-item">
                    <p>Admission and classes starts at Warangal/Hanamkonda</p>
                </div>
                </div>
                <div class="plan-footer">
                starts on 25<sup>th</sup> AUGUST
                </div>
            </div>
            </div>
            </div>
            </div>
        </Layout>
    )
}
export default gatePage;