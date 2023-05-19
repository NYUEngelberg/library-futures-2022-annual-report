import "./App.css";
import Intro from "../Content/Intro";
import Section from "../Content/Section";
import ContentBlock from "../Content/ContentBlock";
// @ts-ignore
import { content } from "../content";
import Footer from "../Content/Footer";
// @ts-ignore
import facts1 from "../assets/images/facts-1.png";
// @ts-ignore
import facts2 from "../assets/images/facts-2.png";

function App() {
  return (
    <div className="w-11/12 md:w-9/12 xl:w-7/12 xl:max-w-[1200px] mx-auto relative">
      <Intro />
      <main>
        <img src={facts1} className="md:mt-[-100px] relative z-10" />
        <div className="md:mt-[-30px]">
          {Object.keys(content).map((key, index) => {
            return (
              <Section sectionTitle={key} key={index}>
                {(
                  (content as any)[key] as [
                    {
                      colors: Array<string>;
                      title: React.ReactNode;
                      id: string;
                      links: React.ReactNode;
                      text: React.ReactNode;
                      other?: React.ReactNode;
                    }
                  ]
                ).map(({ colors, title, id, links, text, other }) => (
                  <ContentBlock
                    colors={colors}
                    links={links}
                    contentBlockTitle={title}
                    otherContent={other}
                    key={id}>
                    <div className="text-base md:text-xl">{text}</div>
                  </ContentBlock>
                ))}
              </Section>
            );
          })}
        </div>
        <img src={facts2} className="md:mt-[-30px] relative z-10" />
      </main>
      <footer className="md:mt-[-100px]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
