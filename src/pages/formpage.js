import React from "react"

const FormPage = () => {
    return (
        <div>
            <form name="contacts" method="POST" data-netlify="true">
                <input name="name" placeholder="Your name" type="text"></input>
            </form>
        </div>
    )
}

export default FormPage