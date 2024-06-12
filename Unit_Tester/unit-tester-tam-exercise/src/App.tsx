import React from 'react';
import './App.css';
import { Accordion, AccordionItem } from './components/accordion/accordion';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Evinced TAM Exercise</h1>
        <h2>Instructions</h2>
          <Accordion>
            <AccordionItem title="Install the unit tester package">
              <ol>
                <li>Enter the TAM exercise directory</li>
                <li>Select the correct node version, run <code>nvm use</code></li>
                <li>Install the unit tester package, run <code>npm install PATH-TO/evinced-unit-tester-VERSION.tgz</code></li>
              </ol>
            </AccordionItem>
            <AccordionItem title="Authenticate with the unit tester">
              <p>
                See instructions at <a href="https://developer.evinced.com/sdks-for-web-apps/unit-tester#authentication>">
                  unit tester authentication instructions</a>
              </p>
            </AccordionItem>
            <AccordionItem title="Write a test using the unit tester">
              <ol>
                <li>Add a new test in the file <code>components/accordion/accordion.test.tsx</code></li>
                <li>For help writing the test, read <a href="https://developer.evinced.com/sdks-for-web-apps/unit-tester#yourfirsttest">
                  your first test</a>, make sure to use the <a href="https://developer.evinced.com/sdks-for-web-apps/unit-tester#analyzeaccordion">
                  <code>EvincedUT.analyzeAccordion</code></a></li>
                <li>Run the test from the command line <code>npm run test</code></li>
              </ol>
            </AccordionItem>
            <AccordionItem title="Fix the false positive">
              <p>
                The new test you added will fail with a false positive related to the visibility of the accordion panel. The message will be
                <code>aria-expanded attribute is not in sync with the content element: aria-expanded is false, the content element is visible and screen reader visibility is visible</code>.
              </p>
              <p>
                The reason for the failure is that by default, the <code>create-react-app</code> setup ignores CSS files
                in the tests. Fix the false positive by updating the test configuration to include the CSS files.
              </p>
              <p>
                Some resources that might help:
              </p>
              <ul>
                <li><a href="https://www.npmjs.com/package/jest-transform-css">jest-transform-css</a></li>
                <li><a href="https://create-react-app.dev/docs/running-tests/#configuration">create-react-app jest configuration</a></li>
              </ul>
            </AccordionItem>
          </Accordion>
      </main>
    </div>
  );
}

export default App;
