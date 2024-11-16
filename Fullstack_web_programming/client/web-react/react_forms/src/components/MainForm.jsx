import { Form, Formik, Field, ErrorMessage } from "formik";
import ContactInfo from "./FormSections/ContactInfo";
import PersonalData from "./FormSections/PersonalData";
import TrainingPreferences from "./FormSections/TrainingPreferences";
import PaymentDetails from "./FormSections/PaymentDetails";
import * as Yup from "yup";

const MainForm = () => (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Formulario de Registro</h2>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                postalCode: '',
                cardNumber: '',
                expirationDate: '',
                cvv: '',
                trainingDays: '',
                trainingTime: '',
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().max(50, 'El nombre no puede tener más de 50 caracteres').required('El nombre es obligatorio'),
                lastName: Yup.string().max(50, 'El apellido no puede tener más de 50 caracteres').required('El apellido es obligatorio'),
                email: Yup.string().email('El correo no es válido').max(100, 'El correo no puede tener más de 100 caracteres').required('El correo es obligatorio'),
                phone: Yup.string().max(15, 'El teléfono no puede tener más de 15 caracteres').required('El teléfono es obligatorio'),
                address: Yup.string().max(100, 'La dirección no puede tener más de 100 caracteres').required('La dirección es obligatoria'),
                city: Yup.string().max(50, 'La ciudad no puede tener más de 50 caracteres').required('La ciudad es obligatoria'),
                postalCode: Yup.string().max(10, 'El código postal no puede tener más de 10 caracteres').required('El código postal es obligatorio'),
                cardNumber: Yup.string().max(16, 'El número de tarjeta no puede tener más de 16 caracteres').required('El número de tarjeta es obligatorio'),
                expirationDate: Yup.string().max(5, 'La fecha de expiración no puede tener más de 5 caracteres').required('La fecha de expiración es obligatoria'),
                cvv: Yup.string().max(4, 'El cvv no puede tener más de 4 caracteres').required('El cvv es obligatorio'),
                trainingDays: Yup.string().max(50, 'Los días de entrenamiento no pueden tener más de 50 caracteres').required('Los días de entrenamiento son obligatorios'),
                trainingTime: Yup.string().max(50, 'El horario de entrenamiento no puede tener más de 50 caracteres').required('El horario de entrenamiento es obligatorio')
            })}
            onSubmit={(values) => {
                console.log('Form submitted successfully', values);
            }}
        >
            <Form className="space-y-6">
                <PersonalData />
                <ContactInfo />
                <PaymentDetails />
                <TrainingPreferences />
                <div className="text-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
                </div>
            </Form>
        </Formik>
    </div>
);

export default MainForm;