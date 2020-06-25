import React from 'react';
import Layout from '../components/layout';

const crtPage = () => {
    return(
        <Layout>
            <div class="columns">
            <div class="column is-8">
            <h1 class="title">
                CRT - Campus Recruitment Training
            </h1>
            <p class="subtitle">
            Aptitude, Reasoning, Group Discussion, Interviews
            </p>
            </div>
            <div class="column is-4 ">
            <div class="pricing-table">
            <div class="pricing-plan is-active">
                <div class="plan-header">-</div>
                <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"></span>Free</span></div>
                <div class="plan-items">
                <div class="plan-item">
                    <h5>timings</h5>
                    <p>4 – 6 hrs/day Flexible (Evening or Morning)</p>
                </div>
                <div class="plan-item">
                    <h5>duration</h5>
                    <p>5 months</p>
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
export default crtPage;