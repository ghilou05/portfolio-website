import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setStatus('sending');

        // Note: You will need to replace these placeholders with your actual IDs from EmailJS dashboard
        const SERVICE_ID = 'service_umyb7o8'; // e.g. service_xxxx
        const TEMPLATE_ID = 'template_h5od44s'; // e.g. template_xxxx
        const PUBLIC_KEY = 'XrN-8xT3p71tY3XCo';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current?.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__header">
                <div className="contact__header__sub-title">CONTACT</div>
                <h1 className="contact__header__title">Get In Touch</h1>
                <p className="contact__header__desc">
                    Whether you have an opportunity, a project idea, or just want <br />
                    to say hi — my inbox is always open.
                </p>
            </div>

            <div className="contact__container">
                <div className="contact__info">
                    <div className="contact__info__card">
                        <div className="contact__info__section">
                            <label>EMAIL</label>
                            <a href="mailto:alex@example.com">alex@example.com</a>
                        </div>
                        <div className="contact__info__section">
                            <label>LOCATION</label>
                            <span>United Kingdom</span>
                        </div>
                        <div className="contact__info__section">
                            <label>SOCIAL</label>
                            <div className="contact__info__socials">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="contact__info__social-box">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="contact__info__social-box">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="mailto:alex@example.com" className="contact__info__social-box">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact__status-card">
                        <h3>Currently open to</h3>
                        <p>Graduate roles, internships, freelance projects, and collaborations in full-stack or mobile development.</p>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form__row">
                        <div className="contact__form__group">
                            <label>NAME</label>
                            <input type="text" name="user_name" placeholder="Alex Williams" required />
                        </div>
                        <div className="contact__form__group">
                            <label>EMAIL</label>
                            <input type="email" name="user_email" placeholder="alex@example.com" required />
                        </div>
                    </div>
                    <div className="contact__form__group">
                        <label>SUBJECT</label>
                        <input type="text" name="subject" placeholder="Opportunity / Collab / Say Hi" required />
                    </div>
                    <div className="contact__form__group">
                        <label>MESSAGE</label>
                        <textarea name="message" placeholder="Tell me about your project or opportunity..." required></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`contact__form__submit ${status === 'sending' ? 'sending' : ''}`}
                        disabled={status === 'sending'}
                    >
                        {status === 'idle' && (
                            <>
                                <FontAwesomeIcon icon={faPaperPlane} />
                                Send Message
                            </>
                        )}
                        {status === 'sending' && <span>Sending...</span>}
                        {status === 'success' && (
                            <>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                Message Sent!
                            </>
                        )}
                        {status === 'error' && (
                            <>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                Failed to Send
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
