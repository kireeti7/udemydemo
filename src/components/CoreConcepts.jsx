import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItems, index) => (
                    <CoreConcept key={index} {...conceptItems} />
                ))}
            </ul>
        </section>

    );
}
