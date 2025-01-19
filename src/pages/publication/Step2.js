import React, { useState } from 'react';

const Step2 = () => {
  const [datasetForms, setDatasetForms] = useState([{ id: 1, value: '' }]);

  // Funzione per aggiungere un nuovo form
  const addForm = () => {
    setDatasetForms([
      ...datasetForms,
      { id: datasetForms.length + 1, value: '' },
    ]);
  };

  // Funzione per gestire il cambio di valore nei form
  const handleInputChange = (e, id) => {
    const updatedForms = datasetForms.map((form) => 
      form.id === id ? { ...form, value: e.target.value } : form
    );
    setDatasetForms(updatedForms);
  };

  // Funzione per validare il campo (un solo punto nel valore)
  const isValid = (value) => {
    // Conta il numero di punti nel valore
    const dotCount = (value.match(/\./g) || []).length;
    return dotCount === 1;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Aggiungi Risorse</h2>
        
        {datasetForms.map((form) => (
          <div key={form.id} className="mb-4">
            <label htmlFor={`dataset-${form.id}`} className="block text-sm font-medium text-gray-700">
              Dataset {form.id}
            </label>
            <input
              type="text"
              id={`dataset-${form.id}`}
              value={form.value}
              onChange={(e) => handleInputChange(e, form.id)}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
                !isValid(form.value) && form.value !== '' ? 'border-red-500' : ''
              }`}
              placeholder="Nome del dataset"
            />
            {!isValid(form.value) && form.value !== '' && (
              <p className="text-red-500 text-sm mt-1">Il nome del file deve contenere un solo punto.</p>
            )}
          </div>
        ))}

        <div className="flex items-center">
          <button
            type="button"
            onClick={addForm}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition duration-300"
          >
            <span className="text-xl">+</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Step2;
