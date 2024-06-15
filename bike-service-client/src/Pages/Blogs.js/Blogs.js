import React from "react";

const Blogs = () => {
  return (
    <div>
      <div
        className="hero h-60"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-6xl font-bold">Question and Answer</h1>
          </div>
        </div>
      </div>

      {/* Question and Answer is here */}
      <div className="py-10">
        <div className="border-8 rounded-lg p-8 shadow-xl shadow-indigo-500/50">
          <h3 className="text-2xl">
            1. What are the different ways to manage a state in a React
            application?
          </h3>
          <p className="text-justify">
            i. <span className="font-semibold">Local (UI) state</span>: Local
            state is data we manage in one or another component. Local state is
            most often managed in React using the useState hook.
            <br />
            ii. <span className="font-semibold"> Global (UI) state</span>:
            Global state is data we manage across multiple components. Global
            state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least.
            <br />
            iii. <span className="font-semibold">Server state</span> : Data that
            comes from an external server that must be integrated with our UI
            state. Server state is a simple concept, but can be hard to manage
            alongside all of our local and global UI state.
            <br />
            iv. <span className="font-semibold">URL state</span> : Data that
            exists on our URLs, including the pathname and query parameters. URL
            state is often missing as a category of state, but it is an
            important one.
          </p>
        </div>

        <div className="border-8 rounded-lg p-8 shadow-xl shadow-indigo-500/50 my-8">
          <h3 className="text-2xl">
            2. How does prototypical inheritance work?
          </h3>
          <p className="text-justify">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>

        <div className="border-8 rounded-lg p-8 shadow-xl shadow-indigo-500/50 my-8">
          <h3 className="text-2xl">
            3. What is a unit test? Why should we write unit tests?
          </h3>
          <p className="text-justify">
            A unit test verifies the behavior of a unit of software in the
            system. It verifies whether a small and isolated piece of the
            codebase called “unit” behaves as the developer intended.
            <br />
            the purpose of unit tests is to test the smallest possible chunks of
            functionality in our production code. In most cases what this will
            mean is writing tests for individual functions that check whether
            given a specific set of inputs, the test produces the correct
            output.
          </p>
        </div>

        <div className="border-8 rounded-lg p-8 shadow-xl shadow-indigo-500/50">
          <h3 className="text-2xl">4. React vs Angular vs Vue.</h3>
          <p className="text-justify">
            <span className="font-semibold">Angular</span> is a front-end
            framework with lots of components, services, and tools. On Angular's
            site, you can see that they define Angular as: “The modern web
            developer's platform”. It is developed and maintained by Google
            developers, but curiously it is not used to implement any of their
            most common products such as Search or YouTube.
            <br />
            <span className="font-semibold">React</span> is considered a UI
            library. They define themselves as: “A JavaScript library for
            building user interfaces”. Facebook developers are behind the
            development and maintenance of this library. And, in this case, most
            of Facebook's products are made with React.
            <br />
            <span className="font-semibold">Vue.js</span> is, according to its
            site: “A progressive JavaScript framework”. Vue.js is developed and
            led by Evan You, but also it counts on a huge open-source community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
