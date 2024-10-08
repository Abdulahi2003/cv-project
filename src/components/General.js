import React, {Component} from 'react'
import "../styles/style.css"
import "../styles/components.css"

class General extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            location: "",
            about: "",
            editMode: true,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            editMode: false
        })
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        })
    }

    render() {
        const {firstName, lastName, email, phone, about, editMode} = this.setState;
        const editButton = <button onClick={this.handleEdit} className="edit-button">EDIT</button>;
        const submitButton = <button type="submit" className="submit-button">SUBMIT</button>;

        const editContent = (
            <div>
                <form className="general-form" onSubmit={this.handleSubmit}>
                    <h4 className="form-header">CONTACT INFO {submitButton}</h4>
                    <div className="name-field">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                            required
                        ></input>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                            required
                        ></input>
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    ></input>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="City, State"
                        name="location"
                        value={window.location}
                        onChange={this.handleChange}
                        required
                    ></input>
                    <textarea
                        placeholder="Personal Summary"
                        name="about"
                        value={about}
                        onChange={this.handleChange}
                        rows={4}
                        cols={42}
                        required
                    />
                </form>
            </div>
        )

        const submittedContent = (
            <div className="general-div">
                {editButton}
                <div className="name-div">
                    <h1>{firstName.toUpperCase()}</h1><h1>{lastName.toUpperCase()}</h1>
                </div>
                <hr></hr>
                <div className="contact-div">
                    <p>{email}</p>
                    <p>|</p>
                    <p>{phone}</p>
                    <p>|</p>
                    <p>{window.location}</p>
                </div>
                <div className="about">
                    <h4>ABOUT ME</h4>
                    <p>{about}</p>
                </div>
            </div>
        )

        return (
            <div>
                {editMode ? editContent : submittedContent}
            </div>
        )
    }
}

export default General;