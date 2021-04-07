import React from "react"

const FormPage = () => {
    return (
        <div>
            <form name="conta" method="POST" data-netlify="true">
                <input name="name" placeholder="Your name" type="text"></input>
                <input name="email" placeholder="Your email" type="email"></input>

                <button>Send</button>
            </form>
        </div>
    )
}

export default FormPage