import { useState } from "react";

const content = [
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
  },
  {
    question: "What are Components?",
    answer:
      "Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately.",
  },
  {
    question: "What is the Virtual DOM?",
    answer:
      "React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.",
  },
];

export default function App() {
  return (
    <div>
      <TabContainer content={content} />
    </div>
  );
}

function TabContainer({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
      </div>
      <TabContent
        item={content.at(activeTab)}
        key={content.at(activeTab).answer}
      />
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="tab-content">
      <h4>{item.question}</h4>
      {showDetails && <p>{item.answer}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>
      </div>
    </div>
  );
}
