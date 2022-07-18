/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import meetup from '../assets/meetup-mockup.png';
import pithome from '../assets/pit-home.png';
// import pitmobile from '../assets/pit-home-mobile.png';
// import pitapw from '../assets/pit-apw.png';
// import pitapwbar from '../assets/pit-apw-bar.png';
import pitanalysis from '../assets/pit-analysis.png';
import pitsketches from '../assets/pit-sketches.png';
import pitwire1 from '../assets/pit-wire-1.png';
import pitwire2 from '../assets/pit-wire-2.png';
import pitui1 from '../assets/pit-ui-1.png';
import pitui2 from '../assets/pit-ui-2.png';
import generalexp from '../assets/general-exp.png';
import easeinfo from '../assets/ease-info.png';
import academicplan from '../assets/academic-plan.png';
import mocksched from '../assets/mock-sched.png';
import NavBar from './NavBar';

function Meetup({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  const footerMessage = 'Made by Sylvia <3';

  useEffect(() => {
    setCurrPage('');
    document.title = 'Meetup | Sylvia Zhao';
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Meetup">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">Meetup</div>
        <div className="project-info">Improving group meeting scheduling on mobile & web</div>
        <img className="project-img" src={meetup} alt="meetup mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header">Overview</div>
            <div className="project-ltext">
              The University of Pennsylvania uses PennInTouch as its academic
              planning and course registration site. Students have constantly
              complained about the unpleasant experience of using PennInTouch and
              how it interferes with their planning processes.
              <br />
              <br />
              The purpose of this project was to identify and redesign a key feature
              PennInTouch. My research process led to a redesign of the Academic
              Planning Worksheet feature that helps students plan for graduation requirements.
            </div>
          </div>
          <div className="section-rflex">
            <div className="subsection-rheader-top">
              ROLE
            </div>
            <div className="project-rtext">
              UX research & design
            </div>
            <div className="subsection-rheader">
              TIMELINE
            </div>
            <div className="project-rtext">
              1.5 months
            </div>
          </div>
        </div>
        <div className="section-header">Existing Interface</div>
        <div className="project-text">
          The current PennInTouch site uses a left sidebar as its main navigation and
          has a text heavy interface. For the site&apos;s main purpose of academic planning
          and registration, students use the &ldquo;Registration & Planning&rdquo; dropdown
          section which includes the Academic Planning Worksheet, Course Search, and Mock
          Schedules features.
        </div>
        <img className="project-img" src={pithome} alt="pit-home" />
        <div className="section-header"> User Research</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;Words cannot describe how terrible the current site is&rdquo; - Penn Student
          </div>
        </div>
        <div className="subsection-header">SURVEY</div>
        <div className="project-text">
          I surveyed 16 Penn undergraduate students through Google Forms to collect data on
          users&apos; attitudes toward PennInTouch. The responses showed a generally negative
          feelings towards the platform, specifically the Academic Planning Worksheet. The
          survey also confirmed the pain point of the site being difficult to navigate.
        </div>
      </div>
      <div className="graphs">
        <div className="graphgrid-row">
          <div className="card-lgraph">
            <div className="graphcard-label">
              QUESTION 1
            </div>
            <div className="graphcard-ques">
              How do you feel about the general experience of using PennInTouch?
            </div>
            <img className="graph-img" src={generalexp} alt="general-exp graph" />
          </div>
          <div className="card-rgraph">
            <div className="graphcard-label">
              QUESTION 2
            </div>
            <div className="graphcard-ques">
              How would you rate the ease of locating information you need on PennInTouch?
            </div>
            <img className="graph-img" src={easeinfo} alt="ease-info graph" />
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
            <img className="graph-img" src={academicplan} alt="academic-plan graph" />
          </div>
          <div className="card-rgraph-low">
            <div className="graphcard-label">
              QUESTION 4
            </div>
            <div className="graphcard-ques">
              How would you rate the experience of using the “Mock Schedules” feature?
            </div>
            <img className="graph-img" src={mocksched} alt="mock-sched graph" />
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USER INTERVIEWS</div>
        <div className="project-text">
          I also conducted user interviews with 3 Penn undergraduate students.
          The students all cames from different programs across the university and relied on
          PennInTouch&apos;s planning features in various degrees. From the 12 questions I asked,
          the general takeaway was that PennInTouch only sufficiently accomplishes its goals
          and could be improved in various areas.
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
          From this, I formed the following guiding question to redesign the Academic Planning
          Worksheet feature.
        </div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we streamline the Academic Planning Worksheet&apos;s interactions
            so that students use it for long-term planning?
          </div>
        </div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header">Solution</div>
            <div className="project-ltext">
              For the redesign, I focused on the interaction of assigning specific
              courses to fulfill a requirement since this was a pain point discussed
              in multiple user interviews.
            </div>
          </div>
          <div className="section-rflex">
            <div className="subsection-rheader-top">
              WIREFRAMES
            </div>
            <div className="project-rtext">
              2 iterations
            </div>
            <div className="subsection-rheader">
              UI DESIGN
            </div>
            <div className="project-rtext">
              2 iterations
            </div>
          </div>
        </div>
        <div className="subsection-header">
          ANALYSIS
        </div>
        <div className="project-text">
          Before creating wireframes, I analyzed the existing Academic Planning Worksheet
          in relation to the pain points mentioned during user research. From these
          observations, I created sketches for potential solutions.
        </div>
      </div>
      <div className="analysis">
        <img className="analysis-img" src={pitanalysis} alt="pit-analysis" />
      </div>
      <div className="project-wrap">
        <img className="project-img" src={pitsketches} alt="pit-sketches" />
        <div className="subsection-header">WIREFRAMES: ITERATION 1</div>
        <div className="project-text">
          My solution focused on creating more intuitive way to assign courses
          to requirements as well as a layout that would visually emphasize the different
          categories of requirements. The following features were incorporated into the redesign:
          <ul>
            <li>
              <div className="list-text">Collapsible right side panel for assigning courses to requirements</div>
            </li>
            <li>
              <div className="list-text">Cards for each requirement category (Foundational Approaches, Sectors, Free Electives, etc.)</div>
            </li>
            <li>
              <div className="list-text">Cards for the two certifications (General Requirements and Major Requirements)</div>
            </li>
            <li>
              <div className="list-text">Filters for customizing which requirement categories to view</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={pitwire1} alt="pit-wire-1" />
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
        <img className="mockup-img" src={pitwire2} alt="pit-wire-2" />
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
              <div className="list-text">Selective use of main dark blue color from original interface to emaphsize features</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={pitui1} alt="pit-ui-1" />
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
      <div className="mockup">
        <img className="mockup-img" src={pitui2} alt="pit-ui-2" />
      </div>
      <div className="project-wrap">
        <div className="section-header">Final Protoype</div>
        <div className="project-text">
          add link to figma or embed? or screen record, add actual device mockups?
        </div>
        <div className="section-header">Reflections</div>
        <div className="project-text">
          reflection statements
        </div>
      </div>
      <div className="footer">{footerMessage}</div>
    </div>
  );
}

export default Meetup;
