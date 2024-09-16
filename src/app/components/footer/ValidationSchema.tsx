
import * as Yup from "yup";
const ValidationSchema = () => {
  // Schéma de validation avec Yup
  const validationSchema = Yup.object({
    Firstname: Yup.string().required("Le prénom est obligatoire"),
    Lastname: Yup.string().required("Le nom est obligatoire"),
    Email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
    Message: Yup.string().required("Le message est obligatoire"),
    terms: Yup.boolean().oneOf([true], "Vous devez accepter les conditions"),
  });
  return validationSchema;
};

export default ValidationSchema;
