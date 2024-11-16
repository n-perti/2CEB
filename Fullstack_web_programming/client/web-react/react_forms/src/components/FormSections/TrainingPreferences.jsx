import { Field, ErrorMessage } from "formik";

const TrainingPreferences = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Preferencias de Entrenamiento</h2>
        <div className="space-y-4">
        <div>
            <label
            htmlFor="trainingDays"
            className="block text-sm font-medium text-gray-700"
            >
            Días de Entrenamiento
            </label>
            <Field
            name="trainingDays"
            type="text"
            id="trainingDays"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage
            name="trainingDays"
            component="div"
            className="text-red-500 text-sm"
            />
        </div>
        <div>
            <label
            htmlFor="trainingTime"
            className="block text-sm font-medium text-gray-700"
            >
            Horario de Entrenamiento
            </label>
            <Field
            name="trainingTime"
            type="text"
            id="trainingTime"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage
            name="trainingTime"
            component="div"
            className="text-red-500 text-sm"
            />
        </div>
        </div>
    </div>
    );

export default TrainingPreferences;
