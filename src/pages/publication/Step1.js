import React, { useState } from 'react';

const Step1 = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nomePubblicazione: '',
        descrizione: '',
        dataSteward: [],
        tipoPubblicazione: 'pubblica',
    });

   // Lista dei data steward
    const dataStewards = [
        'Data Steward 1',
        'Data Steward 2',
        'Data Steward 3',
        'Data Steward 4',
        'Data Steward 5',
        // Aggiungi altri steward se necessario
    ];

    // Filtra i data steward in base al valore immesso
    const filteredStewards = dataStewards.filter((steward) =>
        steward.toLowerCase().includes(formData.dataStewardInput ? formData.dataStewardInput.toLowerCase() : '') && !formData.dataSteward.includes(steward)
    );

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            dataStewardInput: e.target.value,
        });
    };

    const handleTagClick = (tag) => {
        if (!formData.dataSteward.includes(tag)) {
            setFormData({
                ...formData,
                dataSteward: [...formData.dataSteward, tag],
                dataStewardInput: '', // Reset del campo di input dopo selezione
            });
        }
    };

    const handleTagRemove = (tag) => {
        setFormData({
            ...formData,
            dataSteward: formData.dataSteward.filter((item) => item !== tag),
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logica per inviare i dati o passarli al prossimo step
        console.log(formData);
        setStep(step + 1); // Passa al prossimo step
    };

    return (
        <>
        <h2 className="text-2xl font-semibold mb-4">Anagrafica Pubblicazione</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="nomePubblicazione" className="block text-sm font-medium text-gray-700">Nome Pubblicazione</label>
                <input
                    type="text"
                    id="nomePubblicazione"
                    name="nomePubblicazione"
                    value={formData.nomePubblicazione}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="descrizione" className="block text-sm font-medium text-gray-700">Descrizione</label>
                <textarea
                    id="descrizione"
                    name="descrizione"
                    value={formData.descrizione}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    rows="4"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="dataSteward" className="block text-sm font-medium text-gray-700">Data Steward</label>
                <div className="flex flex-wrap gap-2">
                    {formData.dataSteward.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-600 text-white rounded-full px-3 py-1 flex items-center"
                        >
                            {tag}
                            <button
                                type="button"
                                onClick={() => handleTagRemove(tag)}
                                className="ml-2 text-sm text-white"
                            >
                                &times;
                            </button>
                        </span>
                    ))}
                </div>
                <input
                    type="text"
                    id="dataSteward"
                    name="dataSteward"
                    value={formData.dataStewardInput || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Cerca e aggiungi Data Steward"
                />
                {filteredStewards.length > 0 && formData.dataStewardInput && (
                    <ul className="mt-2 border border-gray-300 rounded-md max-h-48 overflow-y-auto">
                        {filteredStewards.map((steward, index) => (
                            <li
                                key={index}
                                className="p-2 cursor-pointer hover:bg-blue-200"
                                onClick={() => handleTagClick(steward)}
                            >
                                {steward}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tipo Pubblicazione</label>
                <div className="flex items-center space-x-4">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="tipoPubblicazione"
                            value="pubblica"
                            checked={formData.tipoPubblicazione === 'pubblica'}
                            onChange={handleChange}
                            className="form-radio text-blue-500"
                        />
                        <span className="ml-2">Pubblica</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="tipoPubblicazione"
                            value="privata"
                            checked={formData.tipoPubblicazione === 'privata'}
                            onChange={handleChange}
                            className="form-radio text-blue-500"
                        />
                        <span className="ml-2">Privata</span>
                    </label>
                </div>
            </div>
        </form>
        </>
    );
};

export default Step1;
