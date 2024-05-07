import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl ml-10">
      <section className="mb-8 shadow-md rounded-md p-6">
        <h2 className="sm:text-3xl text-xl font-bold mb-4">Welcome to SteemBlocks</h2>
        <p className="sm:text-lg text-sm">
          A Steem dapp created by{' '}
          <a
            href="https://steemit.com/@dhaka.witness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            @Dhaka.witness
          </a>{' '}
          team. We are committed to promoting transparency, decentralization, and community-driven governance on the
          Steem blockchain. As an elected witness, we are honored to serve the Steem community and contribute to the
          advancement of this remarkable platform.
        </p>
      </section>

      <section className="mb-8 shadow-md rounded-md p-6">
        <h2 className="sm:text-lg text-sm font-bold mb-2">Basic Information</h2>
        <p className="sm:text-lg text-sm">
          <a
            href="https://steemit.com/@dhaka.witness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            @Dhaka.witness
          </a>{' '}
          is a dedicated team of blockchain enthusiasts based in Dhaka, Bangladesh. With a deep understanding of the
          potential of blockchain technology, we have taken on the responsibility of running the following nodes:
        </p>
        <ul className="list-disc pl-8 text-lg">
          <li>Witness Node (<a href="https://steemit.com/@dhaka.witness"> @Dhaka.witness</a>)</li>
          <li>Seed Node (seed.dhakawitness.com:2001)</li>
          <li>RPC Node (<a href="https://api.dhakawitness.com/">api.dhakawitness.com</a>)</li>
        </ul>
      </section>

      <section className="mb-8 shadow-md rounded-md p-6">
        <h2 className="sm:text-2xl text-xl font-bold mb-2">Our Objective</h2>
        <p className="sm:text-lg text-sm">
          Our primary objective is to contribute to the growth and development of the Steem ecosystem through continuous
          innovation and user-centric services. We will gradually update and add new features on our SteemBlocks dapp.
        </p>
      </section>

      <section className="mb-8 shadow-md rounded-md p-6">
        <h2 className="sm:text-2xl text-xl font-bold mb-2">Our Mission</h2>
        <p className="sm:text-lg text-sm">
          Our mission at Dhaka.witness is to empower individuals and communities on the Steem blockchain. We envision a
          future where content creators, social media enthusiasts, and online communities thrive in a decentralized and
          transparent ecosystem. Through our witness operations, educational resources, and community engagement, we
          strive to foster an environment that encourages creativity, collaboration, and meaningful interactions.
        </p>
      </section>

      <section className="mb-8 shadow-md rounded-md p-6">
        <h2 className="sm:text-2xl text-xl font-bold mb-2">Our Vision</h2>
        <p className="sm:text-lg text-sm">
          We are committed to the core values of transparency, accountability, and open communication. We believe in
          regularly sharing updates, progress reports, and insights about our witness operations, development projects,
          and community initiatives. By embracing transparency, we aim to build trust within the Steem community and
          foster a stronger sense of collaboration and shared purpose.
        </p>
      </section>

      <section className="mb-8 shadow-md rounded-md p-6">
        <p className="sm:text-lg text-sm">
          <br /> Join us on this exciting journey as we work together to shape the future of Steem. We welcome your
          support, engagement, and feedback. Contact us via email, our official email address:{' '}
          <a href="mailto:steemblocks@gmail.com" className="text-blue-500 hover:underline">
            steemblocks@gmail.com
          </a>
        </p>
      </section>
      <section className="mb-8 shadow-md rounded-md p-6">
        <p className="sm:text-lg text-sm">
          Together, let us build a decentralized, transparent, and empowering platform that revolutionizes the way we
          create, share, and interact online.
        </p>
      </section>
      <section className="mb-8 shadow-md rounded-md p-6">
        <p className="sm:text-lg text-sm">
          Thank you for being part of the Dhaka.witness community! <br /> Sincerely, <br /> The{' '}
          <a
            href="https://steemit.com/@dhaka.witness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Dhaka witness
          </a>{' '}
          Team
        </p>
      </section>
    </div>
  );
};

export default About;
