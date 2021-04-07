import React from "react"
import Layout from '../components/layout'

const FormPage = () => {
    return (
        <div>
            <form name="test" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <p> data-netlify=true
                    <label>Your Name: <input type="text" name="name"/></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email"/></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default FormPage