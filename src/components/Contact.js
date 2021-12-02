import '../css/contact.scss'

function Contact(){

    const { REACT_APP_ENVIRONMENT } = process.env

    async function sendMessage() {
        const url = "https://xtbv5fa0w8.execute-api.us-east-1.amazonaws.com/prod/porfolio-message"
        const request = new Request(url)
        fetch(request).then(res => {
            console.log(res)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field =>{
            if(!field.name){ return };
            formData[field.name] = field.value
        })
        sendMessage()
    }
    return(
        <div className="contact-container" id="contact">
            <h1 className="contact-heading">Contact Me</h1>

            {REACT_APP_ENVIRONMENT === 'dev' ?
                <form method="post" className='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label className="contact-label" htmlFor="name">Name:</label>
                    <input type="name" name="name"></input>
                </div>
                <div>
                    <label className="contact-label" htmlFor="email">Email:</label>
                    <input type="email" name="email"></input>
                </div>
                <div className="message-container">
                    <label className="contact-label" htmlFor="message">Message:</label>
                    <input  className="contact-message" type="text" name="message"></input>
                </div>
                <button className="contact-submit">Send Message</button>
            </form>
            :
            <h1>Coming soon!</h1>
        }
            <div className="form-container">

            </div>
        </div>
    )
}

export default Contact;
