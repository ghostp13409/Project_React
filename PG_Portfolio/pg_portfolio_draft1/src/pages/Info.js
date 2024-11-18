import React from "react";

const Info = () => {
  return (
    <div className="info-page">
      <div className="info-content">
        <section className="info-section">
          <h3>Welcome! 👋</h3>
          <p>
            I'm Parth. I'm a developer and I build stuff! Here's some of the
            things I can do for you in summary, so you don't have to look for
            things
          </p>
        </section>
        <h2>What can I do for You?</h2>
        <div className="service-stack">
          <section className="info-section">
            <h3>Software Engineering</h3>
            <p>I can build you a software that solves your problems</p>
          </section>
          <section className="info-section">
            <h3>Database Management</h3>
            <p>
              I can manage your database and make sure it's secure and efficient
            </p>
          </section>
          <section className="info-section">
            <h3>Testing</h3>
            <p>I can test your software and make sure no bug goes unnoticed!</p>
          </section>
        </div>
        <h2>What do I know?</h2>
        <div className="service-stack">
          <section className="info-section">
            <h3>Multilingual</h3>
            <p>Java, Python, JavaScript, C#, React, ASP.Net, SQL, NoSQL <br /> You
            Name it, <br /> I got it...</p>
          </section>
          <section className="info-section">
            <h3>Frameworks and stuff</h3>
            <p>
            HTML, CSS, Bootstrap, Tailwind, React, ASP.Net, Entity Framework,
            Node.js, Express, MongoDB, MySQL, EJS, WordPress, LINQ
            <br /> All that cool Stuff...            
            </p>
          </section>
          <section className="info-section">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, JetBrains, Eclipse, Visual Studio, Postman,
            Figma, Trello, Slack
            <br /> and you can add more in just few days of training...</p>
          </section>
        </div>  
        <section className="info-section">
          <h3>Ready to Collaborate?</h3>
          <p>
            If you’re looking for a developer who’s not only skilled but also
            brings a unique blend of enthusiasm, humor, and dedication to the
            table, then we should definitely chat. Dive into my projects,
            explore my skills, and get to know the person behind the code. Let’s
            create something amazing together!
          </p>
          <p>
            Feel free to reach out, whether you’re ready to collaborate on your
            next big idea or just want to share a good coding joke. Trust me,
            I’ve got plenty!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Info;
