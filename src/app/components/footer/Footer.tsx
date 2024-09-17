"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup"; // Assure-toi que Yup est installé

// ValidationSchema pour Formik
const validationSchema = Yup.object({
  Firstname: Yup.string().required("Prénom requis"),
  Lastname: Yup.string().required("Nom requis"),
  Email: Yup.string().email("Email invalide").required("Email requis"),
  Message: Yup.string().required("Message requis"),
  terms: Yup.boolean().oneOf(
    [true],
    "Vous devez accepter les termes et conditions"
  ),
});

// Interface définissant les propriétés attendues pour les champs de formulaire
interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onchange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  touched: boolean | undefined;
  error: string | undefined;
  isTextArea?: boolean;
}

// Composant pour les champs du formulaire (input ou textarea)
const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onchange,
  onBlur,
  error,
  touched,
  isTextArea = false,
}) => (
  <div className="my-4">
    <label htmlFor={id}>{label}</label>
    {!isTextArea ? (
      <input
        value={value}
        onChange={onchange}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        className="border-2 text-black border-white p-4 mt-4 rounded-md w-full"
        required
      />
    ) : (
      <textarea
        value={value}
        onChange={onchange}
        id={id}
        name={id}
        placeholder={placeholder}
        onBlur={onBlur}
        className="border-2 text-black border-white p-4 mt-4 rounded-md w-full"
        rows={5}
      />
    )}
    {touched && error && (
      <small className="error text-red-800 font-semibold">{error}</small>
    )}
  </div>
);

const Footer = () => {
  const initialValues = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Message: "",
    terms: false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await axios.post("https://formspree.io/f/mnnaywbp", values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        resetForm();
        alert("Le message s'est bien envoyé");
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          alert(`error: ${err.response.data}`);
        } else {
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      }
      setSubmitting(false);
    },
  });

  return (
    <div
      id="Contact"
      className="flex flex-col items-center justify-center w-full bg-black p-12 text-white"
    >
      <div className="flex justify-center pb-12">
        <h2>Contactez-moi</h2>
      </div>
      <form
        method="POST"
        onSubmit={formik.handleSubmit}
        className="sm:w-6/12 lg:w-4/12 max-sm:w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 0, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <FormField
            id="Lastname"
            label="Nom"
            placeholder="Nom"
            value={formik.values.Lastname}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.Lastname}
            touched={formik.touched.Lastname}
          />
          <FormField
            id="Firstname"
            label="Prénom"
            placeholder="Prénom"
            value={formik.values.Firstname}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.Firstname}
            touched={formik.touched.Firstname}
          />
          <FormField
            id="Email"
            label="Email"
            type="email"
            placeholder="Email"
            value={formik.values.Email}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.Email}
            touched={formik.touched.Email}
          />
          <FormField
            id="Message"
            label="Message"
            placeholder="Message"
            value={formik.values.Message}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.Message}
            touched={formik.touched.Message}
            isTextArea
          />
          <div className="flex items-center mb-5">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="terms"
              className="text-white ml-2 text-sm font-medium"
            >
              J&apos;accepte les{" "}
              <a
                href="/privacy-legacy"
                className="text-blue-600 hover:underline"
              >
                termes et conditions
              </a>
              .
            </label>
            {formik.touched.terms && formik.errors.terms && (
              <small className="error text-red-600 ml-2">
                {formik.errors.terms}
              </small>
            )}
          </div>
          <button
            type="submit"
            className="bg-white text-black p-4 rounded-md mt-4 btn"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Envoyer
          </button>
        </motion.div>
      </form>
      <div className="gap-6 flex mb-7 mt-7">
        <SocialLink label="Lien vers mon Github pour visualiser mes projets" href="https://github.com/jlaron230" icon={faGithub} />
        <SocialLink
          label="Lien vers mon Linkedin"
          href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-gavino-284a02b8/"
          icon={faLinkedin}
        />
        <SocialLink label="Lien vers mon twitter" href="https://x.com/ArtetCreation1" icon={faTwitter} />
      </div>
      <div className="flex justify-center gap-3">
        <p className="text-base text-white">
          <Link aria-label="Lien vers les mentions légales du site" href="/privacy-legacy">Mentions légales</Link> - Copyright ©
          2024 - Gavino Jérôme. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

// Interface pour les liens sociaux
interface SocialLinkProps {
  href: string;
  icon: any;
  label: string;
}

// Composant pour les liens sociaux avec icônes
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <Link
    className="hover:scale-125 transition delay-150 duration-300"
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon className="text-white" size="3x" icon={icon} />
  </Link>
);
