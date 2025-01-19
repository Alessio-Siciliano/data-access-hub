import React from 'react';
import '../index.css';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
    const { t, _ } = useTranslation();

    return (
        <main className="container mx-auto py-10">
            <section className="text-center">
                <h2 className="text-4xl font-bold mb-4">{t('welcome')}</h2>
                <p className="text-gray-700 mb-6">{t('description')}</p>
                <button className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    {t('get_started')}
                </button>

            </section>
        </main>
    );
};

export default Homepage;
