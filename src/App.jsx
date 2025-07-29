import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';



function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(SubmitButton) {
        setSelectedTopic(SubmitButton);
        // console.log(selectedTopic); 
    }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItems) => (
              <CoreConcept key={conceptItems.title} {...conceptItems} />
            ))}
          </ul>
        </section>
      </main>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        {!selectedTopic ? ( <p>please select a topic</p> 
      ): (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div> )}
      </section>
    </div>
  );
}

export default App;
