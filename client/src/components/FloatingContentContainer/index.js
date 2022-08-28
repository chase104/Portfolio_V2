import React from 'react';
import './index.css';
import ExampleTabs from '../ExampleTabs'

const FloatingContentContainer = () => {
  return (
    <div className="floating-container">
        <div className="relative-content-container">
            <div className="overflow-container">
                <div className="horizontal-slider">
                    <div className="about"></div>
                    <div className="vertical-app-slider">
                        <div className="app-example app-1"></div>
                        <div className="app-example app-2"></div>
                    </div>
                </div>
            </div>
            <ExampleTabs />
        </div>
    </div>
  )
}

export default FloatingContentContainer