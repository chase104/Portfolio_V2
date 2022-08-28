import React from 'react';
import './index.css';
import ExampleTabs from '../ExampleTabs'
import About from '../About'
import Links from '../Links';

const FloatingContentContainer = () => {
  return (
    <div className="floating-container">
        <div className="relative-content-container">
            <div className="overflow-container">
                <div className="horizontal-slider">
                    <About />
                    <div className="vertical-app-slider">
                        <div className="app-example app-1"></div>
                        <div className="app-example app-2"></div>
                    </div>
                </div>
            </div>
            <ExampleTabs />
            <Links />
        </div>
    </div>
  )
}

export default FloatingContentContainer