import '../css/contact.scss'

function Contact(){
    return(
        <div className="contact-container" id="contact">
            <h1 className="contact-heading">Contact Me</h1>
            <div className="form-container">
                <form method="post" className='contact-form'>
                    <div>
                        <label className="contact-label" htmlFor="name">Name:</label>
                        <input type="name"></input>
                    </div>
                    <div>
                        <label className="contact-label" htmlFor="email">Email:</label>
                        <input type="email"></input>
                    </div>
                    <div className="message-container">
                        <label className="contact-label" htmlFor="message">Message:</label>
                        <input  className="contact-message" type="text"></input>
                    </div>
                    <button className="contact-submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
