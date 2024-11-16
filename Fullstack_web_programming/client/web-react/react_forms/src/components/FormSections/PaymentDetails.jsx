import { Field, ErrorMessage } from "formik";

const PaymentDetails = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Detalles de Pago</h2>
        <div className="space-y-4">
        <div>
            <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
            >
            Número de Tarjeta
            </label>
            <Field
            name="cardNumber"
            type="text"
            id="cardNumber"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage
            name="cardNumber"
            component="div"
            className="text-red-500 text-sm"
            />
        </div>
        <div>
            <label
            htmlFor="expirationDate"
            className="block text-sm font-medium text-gray-700"
            >
            Fecha de Expiración
            </label>
            <Field
            name="expirationDate"
            type="text"
            id="expirationDate"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage
            name="expirationDate"
            component="div"
            className="text-red-500 text-sm"
            />
        </div>
        <div>
            <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
            >
            CVV
            </label>
            <Field
            name="cvv"
            type="text"
            id="cvv"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage
            name="cvv"
            component="div"
            className="text-red-500 text-sm"
            />
        </div>
        </div>
    </div>
    );

export default PaymentDetails;
