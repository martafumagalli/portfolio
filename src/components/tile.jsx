import React from 'react';
import ReactGA from 'react-ga';
import './style.css';

const Tile = (props) => {

  const { lang, title, desc, link, git, preview, code } = props;

  return (
    <div className="tile postit" style={{background:'#ffff00'}}>
      { (preview === true)
      ?
      <ReactGA.OutboundLink
        eventLabel={`visita preview ${title} from title`}
        to={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4 className="mb-1">{title}</h4>
      </ReactGA.OutboundLink>
      :
      <ReactGA.OutboundLink
      eventLabel={`visita code ${title} from title`}
      to={git}
      target="_blank"
      rel="noopener noreferrer"
      >
        <h4 className="mb-1">{title}</h4>
      </ReactGA.OutboundLink>
    }

      <div className="mb-4">{desc}</div>
      <div>Tech Focus: <strong><div className="focus">{lang}</div></strong></div>

      { (preview === true) &&
          <ReactGA.OutboundLink
          eventLabel={`visita preview ${title}`}
          to={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{border: "solid 1px #000", background: "rgba(255,255,255,0.5)",padding: ".8em", borderRadius: "10px", margin: "35px 80px 0 80px"}}>
          <i className="fas fa-external-link-alt"></i> Preview
          </div>
        </ReactGA.OutboundLink>
      }

      { (code && (title !== "Continental ScanCV" && title !== "Manager Homepage" && title !== "PHP PhoneBook")) &&
        <ReactGA.OutboundLink
          eventLabel={`visita code ${title}`}
          to={git}
          target="_blank"
          rel="noopener noreferrer"
        >
        <div style={{border: "solid 1px #000", background: "rgba(255,255,255,0.5)",padding: ".8em", borderRadius: "10px", margin: "10px 80px 0 80px"}}>
        <i className="fab fa-github"></i> Code
        </div>
        </ReactGA.OutboundLink>
      }

      { (code && (title === "PHP PhoneBook")) &&
        <ReactGA.OutboundLink
          eventLabel={`visita code ${title}`}
          to={git}
          target="_blank"
          rel="noopener noreferrer"
        >
        <div style={{border: "solid 1px #000", background: "rgba(255,255,255,0.5)",padding: ".8em", borderRadius: "10px", margin: "30px 80px 0 80px"}}>
        <i className="fab fa-github"></i> Code
        </div>
        </ReactGA.OutboundLink>
      }

      { ((code && title === "Continental ScanCV") || (code && title === "Manager Homepage")) &&
       <div style={{marginTop: "30px"}}>
        <i className="fab fa-github"></i> Code
         <div><sub>private repository - please ask for access</sub></div>
        </div>
      }
    </div>
  )
}

export default Tile;