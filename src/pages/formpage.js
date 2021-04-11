import React from "react"

const FormPage = () => {
    return (
        <div>
            <form name="freelancer_submission" method="POST" data-netlify="true">
                <input name="contact_name" placeholder="Contact Name" type="text"></input>
                <input name="email" placeholder="Email Address" type="email"></input>
                <input name="phone number" placeholder="Phone Number" type="email"></input>
                <button>Send</button>
            </form>
        </div>
    )
}

export default FormPage