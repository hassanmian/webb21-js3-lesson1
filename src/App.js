import React from "react"
import Section from "./components/Section";

const myData = [
  {title: "Hello World 1", subTitle: "123", text: "Lorem ipsum"},
  {title: "Welcome to my World", subTitle: "456", text: "123"},
  {title: "This is me", subTitle: "789",text: "Pelle"},
  {title: "John Doe", subTitle: "abc", text: "John Doe"}
]

function App() {
  return (
    <div>
      {
        myData.map((item, index) => {
          return <Section 
            key={index}
            title={item.title} 
            subTitle={item.subTitle} 
            text={item.text} 
          />
        })
      }
    </div>
  );
}

export default App;
