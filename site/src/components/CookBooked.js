/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
import cookbooked from '../assets/cookbooked-mockup.png';
import existingRecipes from '../assets/existing-recipes.png';
// import notionRecipes from '../assets/notion-recipes.png';
// import meetupGif from '../assets/meetup-mobile.gif';
// import sketch from '../assets/cookbooked-sketch.png';
import features from '../assets/cookbooked-features.png';
import paper1 from '../assets/cookbooked-paper-1.png';
import paper2 from '../assets/cookbooked-paper-2.png';
// import moodboard from '../assets/cookbooked-moodboard.png';
import hifi1 from '../assets/cookbooked-hifi-1.png';
import hifi2 from '../assets/cookbooked-hifi-2.png';
import sidebar from '../assets/cookbooked-sidebar.png';
import timers from '../assets/cookbooked-timers.png';
import hovering from '../assets/cookbooked-hovering.png';

// import library1 from '../assets/cookbooked-library-1.png';
import revis1 from '../assets/cookbooked-hifi-revis-1.png';
import revis2 from '../assets/cookbooked-hifi-revis-2.png';
import revis3 from '../assets/cookbooked-hifi-revis-3.png';
import revis4 from '../assets/cookbooked-hifi-revis-4.png';
import revisSummary from '../assets/cookbooked-revis-summary.png';
// import revisAll from '../assets/cookbooked-all-revis.png';
import variant1 from '../assets/cookbooked-variant-1.png';
import variant2 from '../assets/cookbooked-variant-2.png';
// import final1 from '../assets/cookbooked-final-1.png';
import final2 from '../assets/cookbooked-final-2.png';
import final3 from '../assets/cookbooked-final-3.png';
// import styleGuide from '../assets/cookbooked-style-guide.png';
import kitchenMock from '../assets/cookbooked-kitchen-mock.png';

import NavBar from './NavBar';
import Footer from './Footer';

function CookBooked({ currPage, setCurrPage }) {
  useEffect(() => {
    setCurrPage('');
    document.title = 'CookBooked | Sylvia Zhao';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Meetup">
      <NavBar currPage={currPage} />
      <div id="container-floating">
        <div className="table-text1 nds">
          <Link to="/cookbooked#overview">
            <p className="letter">OVERVIEW</p>
          </Link>
        </div>
        <div className="table-text2 nds">
          <Link to="/cookbooked#existing">
            <p className="letter">EXISTING SITES</p>
          </Link>
        </div>
        <div className="table-text3 nds">
          <Link to="/cookbooked#user-research">
            <p className="letter">USER RESEARCH</p>
          </Link>
        </div>
        <div className="table-text4 nds">
          <Link to="/cookbooked#solution">
            <p className="letter">SOLUTION</p>
          </Link>
        </div>
        <div className="table-text5 nds">
          <Link to="/cookbooked#outcome">
            <p className="letter">OUTCOME</p>
          </Link>
        </div>
        <div className="table-text6 nds">
          <Link to="/cookbooked#reflections">
            <p className="letter">REFLECTIONS</p>
          </Link>
        </div>
        <div id="floating-button">
          <svg className="table-icon" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="icon-border" cx="28" cy="28" r="27" stroke="#bbbbbb" strokeWidth="2" />
            <rect x="19" y="18.5" width="23" height="2" rx="1" fill="#bbbbbb" />
            <rect x="19" y="27.5" width="23" height="2" rx="1" fill="#bbbbbb" />
            <rect x="19" y="36.5" width="23" height="2" rx="1" fill="#bbbbbb" />
            <circle className="dot" cx="14.5" cy="19.5" r="1.5" fill="#bbbbbb" />
            <circle className="dot" cx="14.5" cy="28.5" r="1.5" fill="#bbbbbb" />
            <circle className="dot" cx="14.5" cy="37.5" r="1.5" fill="#bbbbbb" />
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
        <div className="project-header">CookBooked</div>
        <div className="project-info">Innovating on digital recipe interactions</div>
        <img className="project-img" src={cookbooked} alt="cookbooked mockup" />
        <div className="section-header" id="overview">Overview</div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="project-ltext-large">
              An interactive web application designed to help cooks follow
              and organize recipes
            </div>
            <div className="project-ltext-zero">
              Each member of the team was involved in the
              research, design, and programming of the web app.
              The final app was implemented with React along with the Tailwind CSS library.
            </div>
          </div>
          <div className="section-rflex-buttons">
            <a className="overview-buttons" target="_blank" rel="noopener noreferrer" href="https://github.com/jasminecao/cookbooked">GitHub</a>
            <a className="overview-buttons" target="_blank" rel="noopener noreferrer" href="https://cookbooked-mocha.vercel.app/recipe/apple_pie">Final app</a>
          </div>
        </div>
        <div className="descrip-flex">
          <div className="descrip-section">
            <div className="subsection-header">
              ROLE
            </div>
            <div className="project-text-zero">
              UX research & design
              <br />
              Frontend development
            </div>
          </div>
          <div className="descrip-section">
            <div className="subsection-header">
              TEAM
            </div>
            <div className="project-text">
              Jasmine Cao & Leah Levin (research, design, & dev)
            </div>
          </div>
          <div className="descrip-section-last">
            <div className="subsection-header">
              TIMELINE
            </div>
            <div className="project-text">
              3 months
            </div>
          </div>
        </div>
      </div>
      <div className="img-full-wrap cookbooked-bkgrd">
        <img className="img-full" src={features} alt="cookbooked features summary" />
      </div>
      <div className="project-wrap">
        {/* <img className="project-img-top" src={features} alt="cookbooked features summary" /> */}
        <div className="section-header" id="existing">Existing Sites</div>
        <div className="project-text-large">
          Cluttered, disruptive user experiences
        </div>
        <div className="project-text">
          Existing online recipes are full of long passages and distracting ads.
          Although they are digital, these recipes often do not take advantage of
          web interactivity.
        </div>
        <img className="project-img" src={existingRecipes} alt="all recipes screenshot" />
        <div className="section-header" id="user-research"> User Research</div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header">INTERVIEWS</div>
        <div className="project-text">
          At the beginning of this process, our team had decided on a general target audience
          of home cooks. We conducted 4 interviews with potential users to better understand
          pain points and potential opportunities for designs.
          Main findings from interviews are summarized below:
        </div>
      </div>
      <div className="affinity-col">
        <div className="categories-wrap">
          <div className="categories-row-last">
            <div className="category-flex">
              <div className="category-name">ORGANIZATION METHODS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Notion (project management software)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Obsidian (project management software)
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Google Docs (text editor)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Random photos & texts
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">COOKING HABITS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Mix of planned meals & meals using available ingredients
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Recipes most often used for baking, not cooking
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Very ingredient-driven based on what is available, as well as cravings
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Subgroups: organized (recipes)
                    vs unstructured cooking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mockup-col">
        <div className="mockup-flex-fix">
          <img className="mockup-img-lined" src={notionRecipes}
          alt="recipes in notion screenshots" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Example of a recipe database kept in Notion
          </div>
        </div>
      </div> */}
      <div className="project-wrap">
        <div className="subsection-header-sec">
          KEY RESEARCH INSIGHTS
        </div>
        {/* <div className="project-text-single">
          The 4 user interviews showed that the subgroup of cooks who enjoy organized, recipe-guided
          cooking lack a specialized tool for creating or editing personal recipes.
        </div> */}
        <div className="section-flex">
          <div className="section-lflex-half">
            <div className="project-text-large">
              Co-opting other tools
            </div>
            <div className="project-text">
              Cooks turn to text editors & project management tools to store recipes because
              of easy organization
            </div>
          </div>
          <div className="section-rflex-half">
            <div className="project-text-large">
              No specialized features
            </div>
            <div className="project-text">
              Non-cooking tools lack features specific for optimizing the cooking experience
            </div>
          </div>
        </div>
        {/* <ul>
          <li>
            <div className="list-text">Most people turn to text editors
            or project management tools to store recipes since they provide easy organization.</div>
          </li>
          <li>
            <div className="list-text">
              However, these softwares lack features specific to an optimized cooking experience
              (timers, serving size calculation, etc.)
            </div>
          </li>
        </ul> */}
        <div className="project-text-low">
          We decided to focus on this population of cooks who collect and organize their recipes,
          keeping our research in mind with the following guiding question:
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we design a digital recipe software that leverages interactive features
            for home cooks to organize and follow recipes?
          </div>
        </div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext-large">
              Modular recipe sections with interactive organizational features
            </div>
            <div className="project-ltext">
              The final design focused on how users can execute a recipe when cooking.
              The team iterated through paper and digital prototypes.
              Some prototypes were then implemented
              in React for user testing in
              later stages as the app was built iteratively.
              {/* <br />
              <br />
              User testing involved qualitative user feedback as well as statistical analysis of
              variants for certain features. The team collected feedback for usability as well as
              visual design throughout evaluations. */}
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-top">
                  WIREFRAMES
                </div>
                <div className="project-rtext">
                  2 iterations
                </div>
              </div>
              <div className="stage-lwrap">
                <div className="subsection-rheader-top">
                  PROTOTYPES
                </div>
                <div className="project-rtext">
                  3 iterations
                </div>
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                USER TESTING
              </div>
              <div className="project-rtext">
                2 rounds
              </div>
            </div>
          </div>
        </div>
        {/* <img className="features-img" src={features} alt="cookbooked features summary" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header">LOW-FIDELITY IDEATION</div>
        <div className="project-text-large">
          Users preferred a modular layout with sections
        </div>
        <div className="project-text-low">
          We developed two low-fidelity prototypes using paper to experiment with
          modular elements of a recipe interface. The first prototype uses a standard one page
          layout, while the second prototype splits a recipe into subsections for a more modular
          approach.
          {/* Across both prototypes, we included
          the following features:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Embedded timers </span>
                in recipe steps to prevent juggling multiple applications while cooking.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Inline ingredient quantities </span>
                displayed when hovering over the ingredient mentioned in a step.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Checkboxes </span>
                for users to track their progress of completed steps and
                ingredients used.
              </div>
            </li>
          </ul> */}
        </div>
        <div className="project-text-low">
          Evaluations found that
          <span style={{ 'font-weight': '600' }}> users preferred the second paper prototype </span>
          due to it&apos;s
          flexibility and readability.
        </div>
      </div>
      <div className="mockup-col-sm">
        <div className="mockup-row">
          <img className="mockup-limg-row" src={paper1} alt="paper prototype 1 of CookBooked ideation" />
          <img className="mockup-rimg-row" src={paper2} alt="paper prototype 1 of CookBooked ideation" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Paper prototype 1 (standard layout)
            & paper prototype 2
            (modular subsections layout)
          </div>
        </div>
      </div>
      {/* <div className="mockup-col">
        <div className="mockup-flex-fix">
          <img className="mockup-img" src={paper1} alt="paper prototype 1 of CookBooked ideation" />
        </div>
        <div className="mockup-flex-fix">
          <img className="mockup-img" src={paper2} alt="paper prototype 2 of CookBooked ideation" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Left to right, top to bottom: LAMP, TouchChat, TDSnap, Proloquo2Go
          </div>
        </div>
      </div> */}
      {/* <div className="project-wrap">
        <div className="subsection-header-sec">VISUAL DESIGN</div>
        <div className="project-text">
          Working from a mood board we created, the team gravitated
          towards a minimalist aesthetic with touches of color to match
          a sense of efficiency and organization.
        </div>
      </div>
      <div className="mockup-col-sm">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={moodboard} alt="meet-wire-2" />
        </div>
        <div className="mockup-flex-fix">
          <img className="mockup-img-lined" src={styleGuide} alt="meet-wire-2" />
        </div>
      </div> */}
      <div className="project-wrap">
        <div className="subsection-header-sec">HIGH-FIDELITY PROTOTYPE</div>
        <div className="project-text-large">
          Prototyping the modular approach with the sidebar, timers, & inline ingredient quantities
        </div>
        <div className="project-text">
          In order to conduct usability testing, we prototyped the interactions
          for checkboxes, the sidebar, timers, and inline ingredient quantity display.
          {/* A library page contextualizes the recipe experience */}
        </div>
      </div>
      <div className="img-full-wrap-marg cookbooked-bkgrd">
        <img className="img-full-lhalf" src={hifi1} alt="intro view" />
        <img className="img-full-half" src={hifi2} alt="main recipe section view" />
      </div>
      {/* <div className="mockup-col-sm">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={library1} alt="library view" />
        </div>
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={hifi1} alt="intro view" />
        </div>
        <div className="mockup-flex-fix">
          <img className="mockup-img-lined" src={hifi2} alt="main recipe section view" />
        </div>
      </div> */}
      <div className="project-wrap">
        <div className="section-flex-marg">
          <div className="section-lflex-half">
            <div className="project-text-large">
              1. Sidebar with recipe sections
            </div>
            <div className="project-text">
              Allows users to split their recipes into sections for easy navigation and separation
              of tasks
            </div>
          </div>
          <div className="section-rflex-half">
            <img className="img-right" src={sidebar} alt="sidebar" />
          </div>
        </div>
        <div className="section-flex-marg">
          <div className="section-lflex-half">
            <div className="project-text-large">
              2. Embedded timers in steps
            </div>
            <div className="project-text">
              Easy access to timers embedded in steps without leaving the recipe
            </div>
          </div>
          <div className="section-rflex-half">
            <img className="img-right-large" src={timers} alt="timers" />
          </div>
        </div>
        <div className="section-flex-marg">
          <div className="section-lflex-half">
            <div className="project-text-large">
              3. Inline hover for quantities
            </div>
            <div className="project-text">
              Convenient inline display of quantities when hovering over
              an ingredient in a step
            </div>
          </div>
          <div className="section-rflex-half">
            <img className="img-right-large" src={hovering} alt="inline hovering" />
          </div>
        </div>
        <div className="subsection-header">USABILITY TESTING</div>
        <div className="project-text-large">
          7 user interviews for usability & visual design
        </div>
        <div className="project-text">
          Using the hi-fi prototype, we collected feedback from 7 users and revised our
          intial screens.
          Revisions centered around the sidebar styling, library view functionality, and timer UI.
        </div>
      </div>
      <div className="img-full-wrap-marg cookbooked-bkgrd">
        <img className="img-full-top" src={revisSummary} alt="intro view" />
        <div className="mockup-row-first">
          <img className="mockup-limg-row" src={revis1} alt="revision of library view" />
          <img className="mockup-rimg-row" src={revis2} alt="revision of intro page" />
        </div>
        <div className="mockup-row-first">
          <img className="mockup-limg-row" src={revis3} alt="revision of main recipe section view" />
          <img className="mockup-rimg-row" src={revis4} alt="revision of main recipe section view with timers running" />
        </div>
      </div>
      {/* <div className="mockup-col-sm">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={revisAll} alt="library view" />
        </div>
      </div> */}
      {/* <div className="mockup-col-sm">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img" src={revisSummary} alt="summary of revisions" />
        </div>
        <div className="mockup-row-first">
          <img className="mockup-limg-row" src={revis1} alt="revision of library view" />
          <img className="mockup-rimg-row" src={revis2} alt="revision of intro page" />
        </div>
        <div className="mockup-row-first">
          <img className="mockup-limg-row" src={revis3}
          alt="revision of main recipe section view" />
          <img className="mockup-rimg-row" src={revis4}
          alt="revision of main recipe section view with timers running" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Main changes and notes
          </div>
        </div>
      </div> */}
      <div className="project-wrap">
        <div className="project-text-large">
          A/B testing for ingredient display
        </div>
        <div className="project-text">
          We received mixed feedback usability of the inline ingredient hovering,
          so we conducted A/B testing.
          By timing how long it took users to find a specified ingredient quantity for a step,
          we used a t-test to determine that users struggled less with variant 2.
          A Likert scale survey on perceived task difficulty also demonstrated that
          <span style={{ 'font-weight': '600' }}> variant 2 was a more convenient, intuitive experience.</span>
        </div>
        <div className="section-flex">
          <div className="section-lflex-half">
            <div className="project-text-large">
              Variant 1: Keeping inline hovering
            </div>
            <div className="project-text">
              Maintains inline hovering & adds separate ingredients list for convenience
            </div>
          </div>
          <div className="section-rflex-half">
            <div className="project-text-large">
              Variant 2: Ingredients listed under steps
            </div>
            <div className="project-text">
              Removes inline hovering & opts for a more direct approach
            </div>
          </div>
        </div>
        {/* <ul>
          <li>
            <div className="list-text">
              <span style={{ 'font-weight': '600' }}>Variant 1:
              Separate ingredients list & keeping inline hovering </span>
              to address concerns about the hovering&apos;s convenience while still having
              the hover as an option
            </div>
          </li>
          <li>
            <div className="list-text">
              <span style={{ 'font-weight': '600' }}>Variant 2:
              Ingredients under steps & removing inline hovering </span>
              for a more direct approach
            </div>
          </li>
        </ul> */}
        {/* <div className="project-text-low">
          By timing how long it took users to find a specified ingredient quantity for a step,
          we used a t-test to determine that users struggled less with variant 2.
          A Likert scale survey on perceived task difficulty also demonstrated that
          <span style={{ 'font-weight': '600' }}> variant 2 was a more convenient,
          intuitive experience.</span>
        </div> */}
      </div>
      <div className="mockup-col-sm">
        <div className="mockup-row">
          <img className="mockup-limg-row" src={variant1} alt="variant 1 with separate list & hovering" />
          <img className="mockup-rimg-row" src={variant2} alt="variant 2 with ingredients under steps" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Variants 1 & 2 for A/B testing
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">FINAL DESIGN</div>
        <div className="project-text-large">
          A reimagined recipe layout with sections & embedded timers
        </div>
      </div>
      <div className="img-full-wrap-marg cookbooked-bkgrd">
        <img className="img-full-lhalf" src={final2} alt="intro view" />
        <img className="img-full-half" src={final3} alt="intro view" />
      </div>
      {/* <div className="mockup-col-sm-last">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={final1} alt="library view final" />
        </div>
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={final2} alt="intro view final" />
        </div>
        <div className="mockup-flex-fix">
          <img className="mockup-img-lined" src={final3} alt="main recipe section view final" />
        </div>
      </div> */}
      <div className="project-wrap">
        <div className="section-header" id="outcome">Outcome</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;I usually have one timer on the microwave, one on the oven,
            and one on my phone. I love that I can have multiple timers in the app.&rdquo;
            <span style={{ 'font-style': 'italic' }}> &mdash; Tester</span>
          </div>
        </div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="project-ltext-zero">
              For final feedback on CookBooked, users were very positive about the
              app&apos;s visual aesthetic and usability. Users appreciated the flexibility of the
              design and the thought given to a streamlined layout for following recipes.
            </div>
          </div>
          <div className="section-rflex-buttons">
            <a className="overview-buttons" target="_blank" rel="noopener noreferrer" href="https://github.com/jasminecao/cookbooked">GitHub</a>
            <a className="overview-buttons" target="_blank" rel="noopener noreferrer" href="https://cookbooked-mocha.vercel.app/recipe/apple_pie">Final app</a>
          </div>
        </div>
        {/* <div className="project-text">
          For final feedback on CookBooked, users were very positive about the
          app&apos;s visual aesthetic and usability. Users appreciated the flexibility of the
          design and the thought given to a streamlined layout for following recipes.
          <br />
          <br />
          Check out our deployed site and our code at the links below:
          <ul>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://cookbooked-mocha.vercel.app/recipe/apple_pie">
                  Deployed Web App (Desktop Only)
                </a>
              </div>
            </li>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://github.com/jasminecao/cookbooked">
                  GitHub Repository
                </a>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
      <img className="img-full-stretch" src={kitchenMock} alt="cookbooked features summary" />
      <div className="project-wrap">
        {/* <div className="proto-flex">
          <img className="device-mock" src={kitchenMock} alt="meet-device-mock" />
        </div> */}
        <div className="section-header" id="reflections">Reflections</div>
        <div className="project-text">
          Throughout the process of creating CookBooked, we
          learned about the best ways to balance creative features
          with simplicity and clarity for cooks. We hope that our
          design effectively reimagines the digital recipe experience and
          moves beyond the capabilities of existing text editors for recipe creation.
          <br />
          <br />
          Although we explored many methods for recipe organization,
          further user research would allow us to understand how cooks in
          different situations may need additional tools. Additional user
          research could expand the app towards voice control interactions
          as well as the editing functionalities the current design implicitly assumes.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookBooked;
