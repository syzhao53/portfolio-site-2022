/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import pennintouch from '../assets/pennintouch-mockup.png';
import generalexp from '../assets/general-exp.png';
import easeinfo from '../assets/ease-info.png';
import academicplan from '../assets/academic-plan.png';
import mocksched from '../assets/mock-sched.png';
import NavBar from './NavBar';

function PennInTouch({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  console.log(currPage);

  const footerMessage = 'Made by Sylvia <3';

  useEffect(() => {
    setCurrPage('');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="PennInTouch">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">PennInTouch</div>
        <div className="project-info">Redesigning the University of Pennsylvania&apos;s academic planning & registration site, PennInTouch</div>
        <img className="project-img" src={pennintouch} alt="pennintouch mockup" />
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
            <div className="list-text">students generally dislike the outdated UI of PennInTouch and find that it interferes with functionality</div>
          </li>
          <li>
            <div className="list-text">the Academic Planning Worksheet feature is underused and is perceived the most negatively out of PennInTouch&apos;s main features</div>
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
          WIREFRAMES: ITERATION 1
        </div>
        <div className="project-text">
          Should I put existing interface analysis here, probably, or it goes in the beginning
        </div>
      </div>
      <div className="footer">{footerMessage}</div>
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default PennInTouch;
