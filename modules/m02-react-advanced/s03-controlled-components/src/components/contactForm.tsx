"use client";

import { useState } from 'react';
import './contactForm.css';

//Keep form as a single state object with name, email, and message keys (already declared in the skeleton).
//Confirm each <input>/<textarea> already has its value bound to the matching field in form - this is what makes them "controlled"

function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

// TODO: handle form value changes
    // Write one handleChange function that reads name and value off e.target.
    // Update form immutably using the functional form of setForm, spreading the previous
    // state and overwriting the changed field:
    // setForm(prev => ({ ...prev, [name]: value })).
    // Wire this same handleChange to the onChange of all three fields (name, email,
    // message).
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };
// TODO: handle form submission
    // 1. Write a handleSubmit function that takes the form event, calls e.preventDefault()
    // first, then checks isFormValid/isEmailValid.
    // 2. If valid, do something with the data (e.g. console.log(form) or show a success
    // message) - don't reload the page.
    // 3. If invalid, either keep the submit button disabled (Step 4) or show an inline validation
    // message.
    // 4. Wire handleSubmit to the form's onSubmit.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const isFormValid = form.name && form.email && form.message;    
        const isEmailValid = form.email.includes("@");
        e.preventDefault();
        if (isFormValid && isEmailValid) {
            console.log(form);
        } else {
            console.log("Form is invalid");
        }
    };

return (
    // Below the <form>, add a <div className="form-preview"> that reads directly from
    // form state.
    // Display the current name, email, and message so the user sees their input reflected live
    // as they type

    // Compute isFormValid as a boolean: true only when name, email, and message are all
    // non-empty.
    // Compute isEmailValid by checking that form.email contains "@" (a basic sanity
    // check, not full RFC validation).
    // Use isFormValid (and optionally isEmailValid) to disable the submit button when
    // the form isn't ready.

    <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name"/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your email"/>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message"/>
        <button type="submit" disabled={!form.name || !form.email || !form.message || !form.email.includes("@")}>Send</button>
        <div className="form-preview">
            <h3>Form Preview</h3>
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Message:</strong> {form.message}</p>
        </div>
    </form>
);
}
export default ContactForm;

