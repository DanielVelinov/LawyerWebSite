import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactFrom = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    });

    const [validator] = useState(
        new SimpleReactValidator({
            className: 'errorMessage',
        })
    );

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: '',
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form
            method="post"
            className="contact-form styled-contact-form"
            id="contact-form-main"
            onSubmit={(e) => submitHandler(e)}
        >
            <div className="row">
                {/* Име */}
                <div className="col-md-6 form-field">
                    <label htmlFor="name">Име *</label>
                    <input
                        value={forms.name}
                        type="text"
                        name="name"
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Въведете вашето име"
                    />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>

                {/* Email */}
                <div className="col-md-6 form-field">
                    <label htmlFor="email">Имейл *</label>
                    <input
                        value={forms.email}
                        type="email"
                        name="email"
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="example@domain.com"
                    />
                    {validator.message('email', forms.email, 'required|email')}
                </div>
            </div>

            <div className="row">
                {/* Телефон */}
                <div className="col-md-6 form-field">
                    <label htmlFor="phone">Телефон *</label>
                    <input
                        value={forms.phone}
                        type="text"
                        name="phone"
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Въведете вашия телефон"
                    />
                    {validator.message('phone', forms.phone, 'required|phone')}
                </div>

                {/* Тема на контакта */}
                <div className="col-md-6 form-field">
                    <label htmlFor="subject">Тема на запитването *</label>
                    <select
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.subject}
                        className="form-control"
                        name="subject"
                    >
                        <option value="" disabled>
                            Изберете тема
                        </option>
                        <option>Семейно право</option>
                        <option>Лични наранявания</option>
                        <option>Криминално право</option>
                        <option>Образователно право</option>
                        <option>Бизнес право</option>
                    </select>
                    {validator.message('subject', forms.subject, 'required')}
                </div>
            </div>

            {/* Описание на случая */}
            <div className="row">
                <div className="col-md-12 form-field">
                    <label htmlFor="message">Описание на случая *</label>
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        name="message"
                        className="form-control"
                        placeholder="Напишете вашето съобщение тук..."
                        rows="5"
                    ></textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>

            {/* Бутон за изпращане */}
            <div className="submit-area text-center">
                <button type="submit" className="theme-btn-s3">
                    Изпрати
                </button>
            </div>
        </form>
    );
};

export default ContactFrom;
