import React from "react"

const FormPage = () => {
    return (
        <div>
            <form name="contacts" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default FormPage