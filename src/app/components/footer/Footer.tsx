"use client";

import React, { useState } from "react";
import { Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import HCaptcha from "@hcaptcha/react-hcaptcha"; // npm i @hcaptcha/react-hcaptcha
import axios from "axios";
import ScrollToTop from "@/app/components/ScrollBar/ScrollToTop";

/* ---------------- VALIDATION ---------------- */
const validationSchema = Yup.object({
    firstname: Yup.string().required("Prénom requis"),
    lastname: Yup.string().required("Nom requis"),
    email: Yup.string().email("Email invalide").required("Email requis"),
    message: Yup.string().required("Message requis"),
    terms: Yup.boolean().oneOf([true], "Vous devez accepter les termes et conditions"),
});

/* ---------------- INPUT COMPONENT ---------------- */
interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    touched?: boolean;
    error?: string;
    isTextArea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
                                                 id,
                                                 label,
                                                 type = "text",
                                                 placeholder,
                                                 value,
                                                 onChange,
                                                 onBlur,
                                                 touched,
                                                 error,
                                                 isTextArea = false,
                                             }) => (
    <div className="my-4">
        <label htmlFor={id}>{label}</label>
        {!isTextArea ? (
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className="border-2 text-black border-white p-4 mt-4 rounded-md w-full"
                required
            />
        ) : (
            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                rows={5}
                className="border-2 text-black border-white p-4 mt-4 rounded-md w-full"
                required
            />
        )}
        {touched && error && <small className="text-red-600 font-semibold">{error}</small>}
    </div>
);

/* ---------------- FOOTER FORM ---------------- */
const Footer = () => {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            message: "",
            terms: false,
        },
        validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            if (!captchaToken) {
                alert("Veuillez compléter le captcha avant d'envoyer le message.");
                return;
            }

            try {
                // Envoi via Formspree
                await axios.post("https://formspree.io/f/mnnaywbp", {
                    firstname: values.firstname,
                    lastname: values.lastname,
                    email: values.email,
                    message: values.message,
                    "h-captcha-response": captchaToken, // token captcha requis
                }, {
                    headers: { Accept: "application/json" },
                });

                alert("Message envoyé avec succès !");
                resetForm();
                setCaptchaToken(null); // reset du captcha
            } catch (err) {
                alert("Erreur lors de l'envoi. Veuillez réessayer.");
            }

            setSubmitting(false);
        },
    });

    return (
        <div id="Contact" className="flex flex-col items-center justify-center w-full bg-black p-12 text-white">
            <h2 className="pb-12">Contactez-moi</h2>
            <ScrollToTop />
            <form onSubmit={formik.handleSubmit} className="sm:w-6/12 lg:w-4/12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <FormField
                        id="lastname"
                        label="Nom"
                        placeholder="Nom"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        touched={formik.touched.lastname}
                        error={formik.errors.lastname}
                    />
                    <FormField
                        id="firstname"
                        label="Prénom"
                        placeholder="Prénom"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        touched={formik.touched.firstname}
                        error={formik.errors.firstname}
                    />
                    <FormField
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                    />
                    <FormField
                        id="message"
                        label="Message"
                        placeholder="Votre message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        touched={formik.touched.message}
                        error={formik.errors.message}
                        isTextArea
                    />

                    {/* Checkbox termes */}
                    <div className="flex items-center mb-5">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            checked={formik.values.terms}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-4 h-4 mr-2"
                        />
                        <label htmlFor="terms" className="text-sm">
                            J'accepte les{" "}
                            <Link href="/privacy-legacy" className="text-blue-500">
                                termes et conditions
                            </Link>
                        </label>
                    </div>

                    {/* hCaptcha */}
                    <HCaptcha
                        sitekey="48a4e558-a3a8-440e-8e8a-2250db18f86e"
                        onVerify={(token) => setCaptchaToken(token)}
                        onExpire={() => setCaptchaToken(null)}
                    />

                    <button
                        type="submit"
                        className="bg-white text-black p-4 rounded-md w-full mt-4"
                        disabled={!formik.isValid || !captchaToken || formik.isSubmitting}
                    >
                        Envoyer
                    </button>
                </motion.div>
            </form>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-10">
                <SocialLink href="https://github.com/jlaron230" icon={faGithub} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-gavino-284a02b8/" icon={faLinkedin} label="LinkedIn" />
                <SocialLink href="https://x.com/ArtetCreation1" icon={faTwitter} label="Twitter" />
            </div>
        </div>
    );
};

export default Footer;

/* ---------------- SOCIAL LINK ---------------- */
interface SocialLinkProps {
    href: string;
    icon: any;
    label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
    <Link
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-125 transition"
    >
        <FontAwesomeIcon icon={icon} size="3x" />
    </Link>
);
