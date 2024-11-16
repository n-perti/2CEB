import { Field, ErrorMessage } from "formik";

const PersonalData = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Información Personal</h2>
        <div className="space-y-4">
            <div>
                <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                >
                    Nombre
                </label>
                <Field
                    name="firstName"
                    type="text"
                    id="firstName"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                >
                    Apellido
                </label>
                <Field
                    name="lastName"
                    type="text"
                    id="lastName"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Correo Electrónico
                </label>
                <Field
                    name="email"
                    type="email"
                    id="email"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                >
                    Teléfono
                </label>
                <Field
                    name="phone"
                    type="tel"
                    id="phone"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                />
            </div>
        </div>
    </div>
);

export default PersonalData;