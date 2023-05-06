import React from 'react';

const Blog = () => {
    return (
        <div className='my-5 grid  lg:grid-cols-2 gap-x-5 gap-y-5 md:grid-rows-2 sm:grid-rows-1'>
            <div className="mockup-code bg-primary text-primary-content">
           <pre><code>What are the different ways to manage a state in a React application?</code></pre>
          <p>
          React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app
          </p>
          </div>

          <div className="mockup-code bg-primary text-primary-content">
           <pre><code> How does prototypical inheritance work?</code></pre>
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
          </p>
          </div>

          <div className="mockup-code bg-primary text-primary-content">
           <pre><code> What is a unit test? Why should we write unit tests?</code></pre>
<p>Unit Testing is a type of software testing where individual units or components of a software are tested</p>
          </div>

          <div className="mockup-code bg-primary text-primary-content">
           <pre><code>React vs. Angular vs. Vue?</code></pre>
<p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
          </div>


            
        </div>
    );
};

export default Blog;