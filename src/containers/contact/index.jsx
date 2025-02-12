import React, { useState } from "react";
import "./styles.scss"

const MyContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!" + JSON.stringify(formData));
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>Silakan isi formulir ini untuk saran dan kritik terhadap saya.</p>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="name">Nama:</label></td>
                <td><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="nama antum"/></td>
              </tr>
              <tr>
                <td><label htmlFor="email">Email:</label></td>
                <td><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="emailnya dong ka"/></td>
              </tr>
              <tr>
                <td><label htmlFor="question">Pertanyaan:</label></td>
                <td><textarea id="question" name="question" value={formData.question} onChange={handleChange} required placeholder="kuy isi aja slow.."/></td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyContact;
