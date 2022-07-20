/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
import speechconnect from '../assets/speechconnect-mockup.png';
import NavBar from './NavBar';
import Footer from './Footer';

function SpeechConnect({ currPage, setCurrPage }) {
  useEffect(() => {
    setCurrPage('');
    document.title = 'SpeechConnect | Sylvia Zhao';
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="SpeechConnect">
      <NavBar currPage={currPage} />
      <div id="container-floating">
        <div className="table-text1 nds">
          <Link to="/speechconnect#overview">
            <p className="letter">OVERVIEW</p>
          </Link>
        </div>
        <div className="table-text2 nds">
          <Link to="/speechconnect#aac-devices">
            <p className="letter">AAC DEVICES</p>
          </Link>
        </div>
        <div className="table-text3 nds">
          <Link to="/speechconnect#research">
            <p className="letter">RESEARCH</p>
          </Link>
        </div>
        {/* <div className="table-text3 nds">
          <Link to="/speechconnect#market-research">
            <p className="letter">MARKET RESEARCH</p>
          </Link>
        </div> */}
        <div className="table-text4 nds">
          <Link to="/speechconnect#solution">
            <p className="letter">SOLUTION</p>
          </Link>
        </div>
        <div className="table-text5 nds">
          <Link to="/speechconnect#prototype">
            <p className="letter">PROTOTYPE</p>
          </Link>
        </div>
        <div className="table-text6 nds">
          <Link to="/speechconnect#reflections">
            <p className="letter">REFLECTIONS</p>
          </Link>
        </div>
        <div id="floating-button">
          <svg className="table-icon" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="icon-border" cx="28" cy="28" r="27" stroke="#bdbdbd" strokeWidth="2" />
            <rect x="19" y="18.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <rect x="19" y="27.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <rect x="19" y="36.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="19.5" r="1.5" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="28.5" r="1.5" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="37.5" r="1.5" fill="#bdbdbd" />
          </svg>
          <svg className="table-icon-dark" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="icon-border" cx="28" cy="28" r="27" stroke="#033E57" strokeWidth="2" />
            <rect x="19" y="18.5" width="23" height="2" rx="1" fill="#033E57" />
            <rect x="19" y="27.5" width="23" height="2" rx="1" fill="#033E57" />
            <rect x="19" y="36.5" width="23" height="2" rx="1" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="19.5" r="1.5" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="28.5" r="1.5" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="37.5" r="1.5" fill="#033E57" />
          </svg>
        </div>
      </div>
      <div className="project-wrap">
        <div className="project-header">SpeechConnect</div>
        <div className="project-info">Creating a tablet experience for alternative communication tech</div>
        <img className="project-img" src={speechconnect} alt="speechconnect mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="overview">Overview</div>
            <div className="project-ltext">
              Scheduling meetings can often become a laborious process of
              coordination between organizers sending out invites and attendees
              providing their availability.
              <br />
              <br />
              Inspired by past difficulties with the popular scheduling platform When2meet,
              this project aimed to create a more efficient and usable solution for
              people providing their availability for group meetings. The design procees began with
              mobile first in order to focus on usability issues before expanding to desktop.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="subsection-rheader-top">
                ROLE
              </div>
              <div className="project-rtext">
                UX research & design
                <br />
                Visual design
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                TIMELINE
              </div>
              <div className="project-rtext">
                1 month
              </div>
            </div>
          </div>
        </div>
        <div className="section-header" id="aac-devices">AAC Devices</div>
        <div className="project-text">
          Digital augmentative and alternative communication (AAC) devices are speech generating
          devices that allow a user to communicate through a combination of words, images, and
          phrases that the device &ldquo;says&rdquo; out loud. While many groups benefit
          from AAC devices, core users include any individuals who have difficulty producing
          speech due to neurological or physical conditions. This includes individuals with aphasia,
          autism, apraxia, and traumatic brain injury.
          <br />
          <br />
          Made to help users increase their everyday independence and connections with others, AAC
          devices serve a crucial need. However, high tech AAC devices can cost upwards of $1000;
          this barrier to access led me to consider how digital applications for ordinary tablets
          can attempt to fill the same role.
        </div>
        {/* <img className="project-img" src={pithome} alt="pit-home" /> */}
        <div className="section-header" id="research"> Research</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;This is an area in the field that is so critical and underserved&rdquo;
            {/* <br /> */}
            <span style={{ 'font-style': 'italic' }}> &mdash; Speech-Language Pathologist</span>
          </div>
        </div>
        <div className="subsection-header">EXPERT INTERVIEWS</div>
        <div className="project-text">
          Given that students consistently need to schedule group meetings for clubs and projects
          without the use of organized systems (like Microsoft Outlook), I surveyed
          19 university students to understand key factors and pain points in
          diverse scheduling processes and methods. Survey questions focused on both the meeting
          organizer and invitee sides of scheduling.
        </div>
      </div>
      <div id="graphs-meetup" className="graphs">
        <div className="graphgrid-row">
          <div className="card-lgraph">
            <div className="graphcard-label">
              QUESTION 1
            </div>
            <div className="graphcard-ques">
              How do you feel about the general experience of using PennInTouch?
            </div>
            {/* <img className="graph-img" src={generalexp} alt="general-exp graph" /> */}
          </div>
          <div className="card-rgraph">
            <div className="graphcard-label">
              QUESTION 2
            </div>
            <div className="graphcard-ques">
              How would you rate the ease of locating information you need on PennInTouch?
            </div>
            {/* <img className="graph-img" src={easeinfo} alt="ease-info graph" /> */}
          </div>
        </div>
        <div className="graphgrid-row">
          <div className="card-lgraph-low">
            <div className="graphcard-label">
              QUESTION 3
            </div>
            <div className="graphcard-ques">
              How would you rate the experience of using the “Academic Planning Worksheet” feature?
            </div>
            {/* <img className="graph-img" src={academicplan} alt="academic-plan graph" /> */}
          </div>
          <div className="card-rgraph-low">
            <div className="graphcard-label">
              QUESTION 4
            </div>
            <div className="graphcard-ques">
              How would you rate the experience of using the “Mock Schedules” feature?
            </div>
            {/* <img className="graph-img" src={mocksched} alt="mock-sched graph" /> */}
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">MARKET RESEARCH</div>
        <div className="project-text">
          For interviews, I spoke with 2 undergraduate students and 1 graduate student who had
          previous corporate work experience as well. These students were selected for their
          experiences managing teams and clubs. I spoke with each of them on the factors that are
          most important to consider when sending out a meeting invite as well as thought processes
          when providing availability.
          <br />
          <br />
          I synthesized recurring comments from the interviews under the categories of
          academic planning, UI design, general emotions, and navigation issues. Across
          all interviews, users expressed dissatisfaction with outdated UI design, difficulty
          understanding the Academic Planning Worksheet&apos;s interactions, and the site&apos;s
          use of a crowded sidebar for navigation.
        </div>
      </div>
      <div className="affinity">
        <div className="categories-wrap">
          <div className="category-flex">
            <div className="category-name">EMOTIONS</div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text-short">
                  Terrible experience
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text-short">
                  Feels awful
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text">
                  Sufficient, just could be better
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text">
                  Lack of trust in product, feels unreliable
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text">
                  Became embittered with experience overtime
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text">
                  &ldquo;Words cannot describe how terrible [it] is&rdquo;
                </div>
              </div>
            </div>
          </div>
          <div className="category-flex">
            <div className="category-name">NAVIGATION</div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text">
                  Lots of misclicking in sidebar
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text">
                  First time user would have a hard time
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text">
                  Difficult with everything collapsed in sidebar dropdowns
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text">
                  Lots of trial and error navigating with sidebar
                </div>
              </div>
            </div>
          </div>
          <div className="category-lflex">
            <div className="category-name">PLANNING</div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Does not use site for 4-year planning
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Big learning curve using Academic Planning Worksheet
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Use Academic Planning Worksheet to check requirements
                </div>
              </div>
            </div>
          </div>
          <div className="category-rflex">
            <div className="category-name">UI DESIGN</div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Everything in sidebar is too small (web and mobile)
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Text is too small overall
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Strange unused space on right side of page
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">
          KEY RESEARCH INSIGHTS
        </div>
        <div className="project-text-single">
          I came away from my survey and interviews with these main insights:
        </div>
        <ul>
          <li>
            <div className="list-text">Students generally dislike the outdated UI of PennInTouch and find that it interferes with functionality</div>
          </li>
          <li>
            <div className="list-text">The left sidebar navigation is too cramped and most sections go unused</div>
          </li>
          <li>
            <div className="list-text">The Academic Planning Worksheet feature is underused and is perceived the most negatively out of PennInTouch&apos;s main features</div>
          </li>
        </ul>
        <div className="project-text-low">
          After understanding the research results, I created two guiding questions for the design
          process, one for UX design and one for visual design.
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create an organized & customizable AAC application so
            that users can tailor the functionality to their own needs?
          </div>
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create an accessible system of illustrations/icons so
            that users do not need to depend only on written text?
          </div>
        </div>
        {/* <div className="section-header" id="market-research">Market Research</div> */}
        {/* WHERE DOES THE HOW MIGHT WE GO?? */}
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext">
              My solution focused on the user flows of speaking a sentence with the app,
              adding a custom word to the app, and adding a custom set of vocabulary for
              the main grid view. This was executed with a tablet size in mind for similarity
              to actual AAC devices.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="subsection-rheader-top">
                WIREFRAMES
              </div>
              <div className="project-rtext">
                2 iterations
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                UI DESIGN
              </div>
              <div className="project-rtext">
                2 iterations
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        {/* <img id="project-sketches" src={pitsketches} alt="pit-sketches" /> */}
        <div className="subsection-header">WIREFRAMES: ITERATION 1</div>
        <div className="project-text">
          My solution focused on creating more intuitive way to assign courses
          to requirements as well as a layout that would visually emphasize the different
          categories of requirements. The following features were incorporated into the redesign:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Collapsible right side panel </span>
                for assigning courses to requirements, indicated by
                prominently displayed tab on side; clearer than previous interaction at bottom of
                screen and collapsible for space-efficiency
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Cards for each requirement category </span>
                (Foundational Approaches, Sectors, Free Electives, etc.) to visually group
                information for users and improve on pain point concerning visual clutter
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Cards for the two certifications </span>
                (General Requirements and Major Requirements) to separate the checkpoints users
                use to measure progress; originally styled the same as a general requirement
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Filters </span>
                for customizing which requirement categories to view, gives user
                control over experience and allows for more compact view eliminating
                extra information (eg. completed categories)
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        {/* <img className="mockup-img" src={pitwire1} alt="pit-wire-1" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">WIREFRAMES: ITERATION 2</div>
        <div className="project-text">
          After receiving feedback from users on the first set of wireframes, I made changes
          to the structure of the collapsible side panel and several minor features:
          <ul>
            <li>
              <div className="list-text">Made side panel dropdown menus searchable</div>
            </li>
            <li>
              <div className="list-text">
                Changed selection of Course Category (Completed Courses, Currently Enrolled,
                External Credit) from multiple dropdowns to single set of radio buttons in
                side panel
              </div>
            </li>
            <li>
              <div className="list-text">Second displayed dropdown in side panel now depends on the selected radio button</div>
            </li>
            <li>
              <div className="list-text">Removed certification cards (check mark icon added to cards in final UI to indicate certifications)</div>
            </li>
            <li>
              <div className="list-text">Made all cards for requirenent categories collapsible</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        {/* <img className="mockup-img" src={pitwire2} alt="pit-wire-2" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">UI DESIGN: ITERATION 1</div>
        <div className="project-text">
          After finalizing wireframes, I styled the design with the goal of modernizing the
          interface while still keeping Penn&apos;s core branding in mind. The first iteration
          focused on the the following key style choices:
          <ul>
            <li>
              <div className="list-text">Lighter color palette overall for clean, modern feel</div>
            </li>
            <li>
              <div className="list-text">
                Fonts from Penn&apos;s core branding (EB Garamond and Roboto)
              </div>
            </li>
            <li>
              <div className="list-text">Selective use of main dark blue color from original interface to emphasize features</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        {/* <img className="mockup-img" src={pitui1} alt="pit-ui-1" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">UI DESIGN: ITERATION 2</div>
        <div className="project-text">
          Based on further user feedback, the second iteration aimed to improve the cohesiveness
          of the design:
          <ul>
            <li>
              <div className="list-text">Changed all type to sans-serif font (Proxima Nova)</div>
            </li>
            <li>
              <div className="list-text">
                Subtle color added to left sidebar to match rest of design
              </div>
            </li>
            <li>
              <div className="list-text">Lightened and decreased size of bubbles next to course names</div>
            </li>
          </ul>
        </div>
      </div>
      <div id="last-mockup">
        {/* <img className="mockup-img" src={pitui2} alt="pit-ui-2" /> */}
      </div>
      <div className="project-wrap">
        <div className="section-header" id="prototype">Final Protoype</div>
        <div className="project-text">
          add link to figma or embed? or screen record, add actual device mockups?
        </div>
        <div className="section-header" id="reflections">Reflections</div>
        <div className="project-text">
          reflection statements
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpeechConnect;
