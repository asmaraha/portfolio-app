import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Helmet>
                <title>My Portfolio</title>
                <meta name="description" content="A personal portfolio showcasing my projects and skills." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Helmet>
            <Header />
            <Landing />
            <Projects />
            <ContactForm />
        </div>
    );
};

export default App;
