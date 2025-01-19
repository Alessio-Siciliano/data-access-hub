import React, { useState } from 'react';
import Step1 from './publication/Step1';
import Step2 from './publication/Step2';

const PubblicazioneWizard = () => {
  const [currentStep, setCurrentStep] = useState(1); // Stato per tracciare lo step corrente

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1); // Passa al prossimo step
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1); // Torna al passo precedente
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Visualizza la fase attuale */}
        <div className="flex justify-center mb-6">
                <div className="steps steps-horizontal w-full max-w-4xl">
                    <div className={`step ${currentStep === 1 ? 'step-primary' : ''}`}>Anagrafica</div>
                    <div className={`step ${currentStep === 2 ? 'step-primary' : ''}`}>Aggiungi Risorse</div>
                    <div className={`step ${currentStep === 3 ? 'step-primary' : ''}`}>Pubblicazione</div>
                </div>
            </div>
        
        {currentStep === 1 && (
          <Step1 />
        )}

        {currentStep === 2 && (
          <Step2 />
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="text-xl mb-4">Pubblicazione</h3>
            {/* Aggiungi qui il codice per il passo 3 */}
            <div>
              <p>Concludi la pubblicazione in questo step.</p>
            </div>
          </div>
        )}

        {/* Controlli per passare tra gli step */}
        <div className="flex justify-end mt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePreviousStep}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Indietro
            </button>
          )}
          {currentStep < 3 && (
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Prosegui
            </button>
          )}
          {currentStep === 3 && (
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Pubblica
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PubblicazioneWizard;
