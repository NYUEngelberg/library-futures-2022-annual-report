import protestSigns from "./assets/images/protest-signs.png";
import textbook from "./assets/images/textbook.png";
import urbanRural from "./assets/images/urban-rural.png";
import screenPile from "./assets/images/screen-pile.png";
import hands from "./assets/images/hands.png";
import externalLink from "./assets/icons/external-link.png";

const externalLinkIcon = (
  <img src={externalLink} className="h-4 mb-2 ml-2 inline" />
);

export const content = {
  Research: [
    {
      colors: ["bg-green2", "bg-green3", "text-notblack"],
      id: "improving-digital-access",
      title: (
        <h3>
          Improving Digital Access to Local News Through Library-Newsroom
          Collaboration
        </h3>
      ),
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.libraryfutures.net/post/improving-digital-access-to-local-news-through-library-newsroom-collaboration">
          Read more
          {/* {isExternal && " (external link)"} */}
        </a>
      ),
      text: (
        <p>
          Library Futures completed a project with the Albany Public Library,
          Hearken, and the Albany Times Union to improve digital access to local
          news through collaboration with libraries and newsrooms. This three
          month pilot project established ties between the library, newsroom,
          and patrons. The program used public-powered journalism, a method that
          engages communities directly with journalists to cover otherwise
          overlooked or underreported stories. The aim was to explore
          possibilities for expanding equitable digital access to local news
          through library-newsroom collaboration with an emphasis on
          sustainable, low-tech solutions, library ownership of digital
          materials, and long-term relationship-building.
        </p>
      ),
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "amicus-briefs",
      title: (
        <span className="block w-full text-right relative">
          <h3 className="relative z-10">Amicus Briefs</h3>
          <div className="hidden md:block h-60 overflow-hidden">
            <div className="relative bottom-8">
              <img
                className="object-cover rotate-6 right-20 top-6 max-w-[125%] relative"
                src={protestSigns}
                alt=""
              />
            </div>
          </div>
        </span>
      ),
      links: (
        <>
          <a
            className="font-bold block text-base md:text-xl"
            href="https://www.supremecourt.gov/DocketPDF/21/21-869/228252/20220617095802802_21-869_Amici%20Brief.pdf">
            Warhol Foundation v. Lynn Goldsmith Ltd.
            {externalLinkIcon}
          </a>
          <a
            className="font-bold block text-base md:text-xl"
            href="https://www.libraryfutures.net/post/library-futures-files-collaborative-amici-in-american-society-for-testing-and-materials-et-al-v-public-resource-org">
            American Society for Testing and Materials, et al. v.
            Public.Resource.Org
            {/* {isExternal && " (external link)"} */}
          </a>
          <a
            className="font-bold block text-base md:text-xl"
            href="https://www.libraryfutures.net/post/library-futures-files">
            Hachette v Internet Archive
            {/* {isExternal && " (external link)"} */}
          </a>
        </>
      ),
      text: (
        <p>
          Our amicus program filed three briefs in national cases, including at
          the Supreme Court. Led by Board Chair and Fellow Kyle K. Courtney and
          Policy Fellow Juliya Ziskina, the briefs have been called ‘the most
          collaborative library briefs in history,’ and were supported by
          organizations like the American Library Association, Software
          Preservation Network, Every Library, and Readers First.
        </p>
      ),
    },
  ],
  "Policy & Advocacy": [
    {
      colors: ["bg-teal1", "bg-teal2", "text-notblack"],
      id: "smart",
      title: <h3>Opposition to SMART Copyright Act</h3>,
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.libraryfutures.net/post/library-futures-joins-opposition-against-the-smart-copyright-act">
          Read more
          {/* {isExternal && " (external link)"} */}
        </a>
      ),
      text: (
        <p>
          This bill, which deputizes the Copyright Office to designate certain
          “technological measures” (i.e., filters and content monitoring
          software) that every digital platform or website hosting user-uploaded
          content must use was introduced in May. We joined with Electronic
          Frontier Foundation, Public Knowledge, Author’s Alliance, Internet
          Archive, among others, to object in the form of a public letter to
          protest the onerous burden on libraries.
        </p>
      ),
    },
    {
      colors: ["bg-purple1", "bg-purple2", "text-notblack"],
      id: "jcpa",
      title: <h3>Opposition to the JCPA</h3>,
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://publicknowledge.org/policy/public-interest-letter-opposing-jcpa/">
          Read more
          {externalLinkIcon}
        </a>
      ),
      text: (
        <p>
          In the form of opeds, letters to Congress, and news conferences,
          Library Futures was a leading voice in the opposition to The
          Journalism Competition and Preservation Act, which would alter the
          free and open nature of the internet.
        </p>
      ),
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "ebook",
      title: (
        <h3>
          Mitigating the Library <br /> Ebook Conundrum Policy Paper
        </h3>
      ),
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.libraryfutures.net/library-futures-ebooks-policy-paper">
          Read more
          {/* {isExternal && " (external link)"} */}
        </a>
      ),
      text: (
        <p>
          Library Futures supports legislation that aims to equitize the eBook
          marketplace. In this paper, we propose model legislation grounded in
          state consumer protection, state contract law, state procurement law,
          and contract preemption.
        </p>
      ),
    },
    {
      colors: ["bg-purple1", "bg-purple2", "text-notblack"],
      id: "sparc",
      // title: (
      //   <h3>Joint Campaign with SPARC to Halt Wiley E-Textbook Removal</h3>
      // ),
      title: (
        <span className="block w-full text-left md:text-right relative">
          <h3 className="relative z-10">
            Joint Campaign with <br />
            SPARC to Halt
            <br /> Wiley E-Textbook <br />
            Removal
          </h3>
          <div className="relative h-1">
            <div className="relative h-1 bottom-[29rem] right-6 opacity-0 md:opacity-30 lg:opacity-100">
              <img className="h-[30rem]" src={textbook} alt="" />
            </div>
          </div>
        </span>
      ),
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.libraryfutures.net/post/library-futures-and-sparc-condemn-wiley-e-textbook-withdrawal">
          Read more
          {/* {isExternal && " (external link)"} */}
        </a>
      ),
      text: (
        <p>
          In late August, just before the start of the Fall 2022 school
          semester, Wiley Publishing Company abruptly withdrew 1,379
          multidisciplinary titles from Proquest, a vendor for university ebook
          collections. Library Futures and SPARC launched a joint campaign to
          protest this removal and hold vendors to account for making unilateral
          decisions that harm learning and information accessibility for all
          students.
        </p>
      ),
    },
    {
      colors: ["bg-teal1", "bg-teal2", "text-notblack"],
      id: "accountability",
      title: (
        <h3>
          We Demand Accountability from <br /> Hoopla and Overdrive
        </h3>
      ),
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://libraryfreedom.medium.com/we-demand-accountability-from-hoopla-digital-and-overdrive-regarding-the-platforming-of-fascist-c47c88e62ddc">
          Read more
          {externalLinkIcon}
        </a>
      ),
      text: (
        <p>
          Collection development is a core responsibility of librarians and our
          vendors must take this responsibility as seriously as professional
          librarians take it. That begins with transparency about how materials
          are finding their way into the collections of services like
          Hoopla.Together with Library Freedom Project, we demand that Hoopla
          provide the library community with answers about their content
          selection process, including both the automated and human elements
          involved.
        </p>
      ),
    },
    {
      colors: ["bg-purple1", "bg-purple2", "text-notblack"],
      id: "dragnet",
      title: (
        <h3>
          Databroker Dragnet: <br />
          LexisNexis, ICE, and How
          <br /> Librarians Are Fighting Back
        </h3>
      ),
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.youtube.com/watch?v=M2jb5IMIfIs">
          Read more
          {externalLinkIcon}
        </a>
      ),
      text: (
        <p>
          Data brokers like LexisNexis and Thomson Reuters are increasingly
          contracting with Immigration and Customs Enforcement (ICE) to sell
          databases full of personal information for use in deportations. This
          campaign with Mijente and Library Freedom Project kicked off with a
          webinar and letter writing.
        </p>
      ),
      other: <img className="mb-4" src={urbanRural} alt="" />,
    },
  ],
  "Educational Resources": [
    {
      colors: ["bg-teal1", "bg-teal2", "text-notblack"],
      id: "copyright-booth",
      title: (
        <span className="relative">
          <h3 className="mb-[-4rem] relative z-10">Copyright Booth to Go</h3>
          <div className="flex justify-end opacity-0 md:opacity-100">
            <img className="h-20 md:h-52" src={hands} alt="" />
          </div>
        </span>
      ),
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://uploads-ssl.webflow.com/5f308d0beb0dcb479f2d2b7c/62d85de0330928071728afa7_Copyright%20Booth%20To-go!.pdf">
          View PDF
          {externalLinkIcon}
        </a>
      ),
      text: (
        <p>
          Community Fellow Emily Finch converted the American Library
          Association Conference copyright booth into a portable Open
          Educational Resource that can be used anywhere.
        </p>
      ),
    },
  ],
  "More of Our Work": [
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "january",
      title: <h3>Month by Month</h3>,
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://archive.org/details/public-domain-zine">
          We are co-hosts and Zine Makers for Public Domain Day in front of an
          audience of thousands
          {externalLinkIcon}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">January</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "february",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.libraryfutures.net/library-futures-albany-public-library-discovery-insights-initial-findings">
          We release our first insights report from our work with the Albany
          Public Library
          {/* {isExternal && " (external link)"} */}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">February</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "april",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://twitter.com/library_futures/status/1518408275846443008">
          We hold our first in person event in NYC with METRO Library Council
          and the Engelberg Center
          {externalLinkIcon}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">April</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "may",
      title: "",
      links: "",
      text: (
        <>
          <h4 className="text-3xl bg-peach3/50">May</h4>
          <p className="">We welcome our first fellows for digital equity</p>
        </>
      ),
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "june",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.youtube.com/watch?v=wzT8ntYR7sQ&t=544s">
          Director Jennie Rose Halperin presents at the US Book Show
          {externalLinkIcon}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">June</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "july",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://metro.org/decentralizedweb">
          We kick off our event series Exploring the Decentralized Web with
          METRO Library Council and the Internet Archive
          {externalLinkIcon}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">July</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "august",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.niso.org/press-releases/2021/09/niso-awarded-mellon-funding-controlled-digital-lending-project">
          Director Jennie Rose Halperin is named Chair of the National
          Information Standards Organization’s Controlled Digital Lending
          Working Group
          {externalLinkIcon}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">August</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "september",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.libraryfutures.net/post/library-futures-joins-the-engelberg-center">
          We establish our new home at the Engelberg Center for Technology Law &
          Policy
          {/* {isExternal && " (external link)"} */}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">September</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "october",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://publicknowledge.org/annual-ip3-awards/">
          Kyle K. Courtney receives IP3 Award from Public Knowledge, Library
          Futures attends the Library Leaders Forum
          {externalLinkIcon}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">October</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "november",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.bonfire.com/library-futures-relx-dont-do-it/">
          Library Futures releases our RELX: Don’t Do it Tshirt
          {externalLinkIcon}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">November</h4>,
    },
    {
      colors: ["bg-peach2", "bg-peach3", "text-notblack"],
      id: "december",
      title: "",
      links: (
        <a
          className="font-bold block text-base md:text-xl"
          href="https://www.libraryfutures.net/post/library-futures-mellon-grant">
          The Mellon Foundation grants $1 million to support libraries in the
          Digital Age
          {/* {isExternal && " (external link)"} */}
        </a>
      ),
      text: <h4 className="text-3xl bg-peach3/50">December</h4>,
      other: <img className="mb-4" src={screenPile} alt="" />,
    },
    {
      colors: ["bg-green2", "bg-green3", "text-notblack"],
      id: "featured",
      title: <h3>We were featured in…</h3>,
      links: "",
      text: (
        <p className="">
          <a
            href="https://www.washingtonpost.com/technology/2022/07/25/internet-archive-digital-lending-lawsuit/"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Washington Post
          </a>
          {", "}
          <a
            href="https://www.wsj.com/articles/online-books-lawsuit-tests-limits-of-libraries-in-digital-age-ae53bbe6"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Wall Street Journal
          </a>
          {", "}
          <a
            href="https://www.wired.com/story/internet-archive-copyright-library/"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Wired
          </a>
          {", "}
          <a
            href="https://www.vice.com/en/article/93b7je/ebook-services-are-bringing-unhinged-conspiracy-books-into-public-libraries"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Vice
          </a>
          {", "}
          <a
            href="https://www.pewtrusts.org/en/research-and-analysis/blogs/stateline/2022/09/06/librarians-and-lawmakers-push-for-greater-access-to-e-books"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Pew Trusts
          </a>
          {", "}
          <a
            href="https://www.timesunion.com/business/article/Answers-5-questions-Pearl-Street-17073537.php"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Albany Times Union
          </a>
          {", "}
          <a
            href="https://readsludge.com/2022/03/17/publishing-giants-are-fighting-libraries-on-e-books/"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Sludge
          </a>
          {", "}
          <a
            href="https://news.bloomberglaw.com/ip-law/internet-archive-pandemic-library-provokes-broader-lending-fight"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Bloomberg Law
          </a>
          {", "}
          <a
            href="https://www.npr.org/2022/10/12/1127508725/prince-andy-warhol-supreme-court-copyright"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            NPR
          </a>
          {", "}
          <a
            href="https://www.publishersweekly.com/pw/by-topic/industry-news/libraries/article/90346-library-futures-joins-nyu-s-engelberg-center-on-innovation-law-policy.html"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            Publisher’s Weekly
          </a>
          {", "}
          <a
            href="https://thehill.com/opinion/technology/3499633-if-publishers-have-their-way-libraries-digital-options-will-see-major-cuts/"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            The Hill
          </a>
          {", and "}
          <a
            href="https://americanlibrariesmagazine.org/2022/05/17/what-does-my-library-need-to-know-about-ebook-laws/"
            className="inline m-0 p-0 text-notblack underline hover:no-underline">
            American Libraries Magazine
          </a>
        </p>
      ),
    },
    {
      colors: ["bg-purple1", "bg-purple2", "text-notblack"],
      id: "donors",
      title: <h3>Thank you to our donors!</h3>,
      links: "",
      text: (
        <p>
          In 2022, the Mellon Foundation announced their generous support of $1
          million, as well as more than a dozen individual donors. Please
          consider supporting Library Futures this year with a tax deductible
          donation or foundation contribution.
        </p>
      ),
    },
  ],
};
