import React from 'react';
import ReactGA from 'react-ga';
import './style.css';

const Tile = (props) => {

  const { lang, title, desc, link, git, preview, code } = props;

  return (
    <div className="tile postit" style={{background:'#ffff00'}}>
      <h4 className="mb-1">{title}</h4>
      <div className="mb-4">{desc}</div>
      <div>Tech Focus: <strong><div className="focus">{lang}</div></strong></div>

      { (preview === true) &&
        <div className="mt-3">
          <ReactGA.OutboundLink
          eventLabel={`visita preview ${title}`}
          to={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-external-link-alt"></i> Preview
        </ReactGA.OutboundLink>
        </div>
      }

      { (code && (title !== "Continental ScanCV" && title !== "Manager Homepage")) &&
       <div className="mt-3">
        <ReactGA.OutboundLink
          eventLabel={`visita code ${title}`}
          to={git}
          target="_blank"
          rel="noopener noreferrer"
        >
        <i className="fab fa-github"></i> Code
        </ReactGA.OutboundLink>
        </div>
      }

      { ((code && title === "Continental ScanCV") || (code && title === "Manager Homepage")) &&
       <div className="mt-3">
                 <ReactGA.OutboundLink
          eventLabel={`visita code ${title}`}
          to={git}
          target="_blank"
          rel="noopener noreferrer"
        >
        <i className="fab fa-github"></i> Code
        </ReactGA.OutboundLink>
         <div><sub>Note: this is a private repository, please ask for access</sub></div>
        </div>
      }
    </div>
  )
}

export default Tile;