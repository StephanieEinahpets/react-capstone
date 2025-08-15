import { useState } from "react"
import "../styles/pages/contact.scss"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPopup(true)

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    })

    setTimeout(() => setShowPopup(false), 2000)
  }

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.message.trim()

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          First Name <span className="required">*</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name <span className="required">*</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email <span className="required">*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message <span className="required">*</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={!isFormValid}>
          Send Message
        </button>
      </form>

      {showPopup && (
        <div className="popup">Your information has been submitted!</div>
      )}
    </div>
  )
}
