import '../css/contact.scss'

function Contact(){

    const { REACT_APP_ENVIRONMENT } = process.env

    async function sendMessage() {
        const url = "https://xtbv5fa0w8.execute-api.us-east-1.amazonaws.com/prod/porfolio-message"
        const request = new Request(url)
        fetch(request).then(res => {
            // console.log(res)
        })
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        // const formData = {}
        // Array.from(e.currentTarget.elements).forEach(field =>{
        //     if(!field.name){ return };
        //     formData[field.name] = field.value
        // })
        // sendMessage()
    }
    return(
        <div className="contact-container" id="contact">
            <h1 className="contact-heading">Contact Me</h1>

            {REACT_APP_ENVIRONMENT === 'dev' ?
                <div className="contact-form-container">
                    <form className="contact-form" action="POST">
                        <div className="form-group">
                            <label id="name" className="form-label">Name</label>
                            <input className="form-control" type="text" id="name" name="name" placeholder="name" tabIndex="1" required></input>
                        </div>
                        <div className="form-group">
                            <label id="email" className="form-label">Email</label>
                            <input className="form-control" type="email" id="email" name="email" placeholder="email@domain.com" tabIndex="2" required></input>
                        </div>
                        <div className="form-group">
                            <label id="subject" className="form-label">Subject</label>
                            <input className="form-control" type="text" id="subject" name="subject" placeholder="subject" tabIndex="3" required></input>
                        </div>
                        <div className="form-group">
                            <label id="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" name="message" placeholder="message..." tabIndex="4" required></textarea>
                        </div>
                        <div className="submit-container">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            :
            <h1>Coming soon!</h1>
        }
            <div className="form-container">

            </div>
        </div>
    )
}

export default Contact;
