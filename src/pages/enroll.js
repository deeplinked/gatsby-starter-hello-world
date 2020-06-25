import React from 'react';
import Layout from '../components/layout';

const Enroll = () => {
    return(
        <Layout>
            <div class="columns">
            <div class="column is-half">

            <form method="post" name="enroll" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="enroll" />
            
            <div class="field">
            <label class="label">Course type</label>
            <div class="control">
                <div class="select">
                <select>
                    <option>-</option>
                    <option>Regular</option>
                    <option>Weekends</option>
                </select>
                </div>
            </div>
            </div>
            <div class="field">
            <label class="label">Engineering branch</label>
            <div class="control">
                <div class="select">
                <select>
                    <option>-</option>
                    <option>EEE</option>
                    <option>ECE</option>
                </select>
                </div>
            </div>
            </div>
            <div class="field">
            <label class="label">Course</label>
            <div class="control">
                <div class="select">
                <select>
                    <option>-</option>
                    <option>GATE</option>
                    <option>PSU</option>
                    <option>GATE + PSU</option>
                </select>
                </div>
            </div>
            </div>
            <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input" />
            </div>
            </div>
            <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input" />
            </div>
            </div>
            <div class="field">
            <label class="label">Mobile number</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input" />
            </div>
            </div>
            <div class="field">
            <label class="label">Address</label>
            <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
            </div>
            <div class="field">
            <div class="control">
                <label class="checkbox">
                <input class="mr-2" type="checkbox" />
                I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
            </div>
            <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
            </div>
            </form>

            </div>
            </div>
        </Layout>
    );
}

export default Enroll;