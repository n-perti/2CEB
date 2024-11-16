import { Field, ErrorMessage } from "formik";

const ContactInfo = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
    <div className="space-y-4">
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Dirección
        </label>
        <Field
          name="address"
          type="text"
          id="address"
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage
          name="address"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          Ciudad
        </label>
        <Field
          name="city"
          type="text"
          id="city"
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage
          name="city"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="postalCode"
          className="block text-sm font-medium text-gray-700"
        >
          Código Postal
        </label>
        <Field
          name="postalCode"
          type="text"
          id="postalCode"
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage
          name="postalCode"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  </div>
);

export default ContactInfo;
