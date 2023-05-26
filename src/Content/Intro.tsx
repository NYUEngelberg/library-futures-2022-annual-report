import * as React from "react";
// @ts-ignore
import lfLogo from "../assets/logos/LibraryFutures_1200px.png";
// @ts-ignore
import ecLogo from "../assets/logos/ec-lockup-color.png";
// @ts-ignore
import library from "../assets/images/library.png";

const Intro: React.FC<{}> = () => {
  return (
    <section className="bg-peach mb-4 relative intro">
      <h1 className="text-3xl md:text-6xl mb-4 pt-24 lg:pt-6 tracking-wider">
        <span className="text-4xl md:text-7xl font-display text-purple4 font-bold">
          Library Futures
        </span>{" "}
        <br />
        <span className="text-purple4 font-display">2022 Annual Report</span>
      </h1>
      <div className="absolute top-3 left-4 lg:right-4 lg:left-auto lg:block flex">
        <img src={lfLogo} className="w-20 lg:w-32" alt="" />
        <img
          src={ecLogo}
          alt=""
          className="w-20 h-auto lg:w-32 mr-4 self-center"
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-4xl bg-peach1/60 font-display text-teal3 tracking-wider font-bold">
          A note from Jennie Rose Halperin, Director
        </h2>
        <p className="text-base md:text-xl">
          Last year, Library Futures became an even bigger player in the fight
          for balanced digital rights. Well into our second year, we&#8217;ve
          reached thousands through our events, talks, research and legal
          briefs, and advocacy campaigns. Since the beginning, our goal has been
          to tackle the cutting-edge issues around technology and access,
          promoting access to information with an emphasis on equity and
          fighting corporate enclosure.
          <br />
          <br />
          Library Futures builds connections between library practitioners,
          policymakers, advocates, and technologists, promoting new
          possibilities for preservation of, and unfettered access to,
          information. Our work is situated at the front end of the curve,
          tackling key and emerging issues while promoting the rights of
          libraries to provide equitable, open access to culture in the service
          of the public good.
          <br />
          <br />I am proud that we move with such decisiveness and
          thoughtfulness. Settled into our new home at the Engelberg Center on
          Innovation Law & Policy at NYU Law and with a two year capacity-
          building grant from the Mellon Foundation, we are better positioned
          than ever to tackle the most pressing information issues facing the
          communities we serve.
          <br />
          <br />
          Libraries face unprecedented challenges, and together we can rise to
          meet them in an uncertain landscape of censorship, corporatized
          knowledge systems, anti-democratic legislation, and court decisions
          that privilege profits over people. But we can only do it together.
          Thank you for your support this year, and in the years to come.
        </p>
        <img
          className="mb-4 max-w-[110%] ml-[-5%] xl:ml-[-4%] 2xl:ml-[-2%]"
          src={library}
          alt=""
        />
      </div>
    </section>
  );
};

export default Intro;
