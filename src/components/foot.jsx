import React from 'react';
import ReactGA from 'react-ga';

const Foot = () => {
  return (
    <div className="footer">
      <div>&copy;2020 Diafana-DEV</div>
      <ul>
        <li>
          <i className="fas fa-envelope-square mr-1"></i>  fumagalli.marta@gmail.com
        </li>
        <li>
        <ReactGA.OutboundLink
          eventLabel="visita github"
          to="https://github.com/martafumagalli?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin mr-1"></i>  My Github
        </ReactGA.OutboundLink>
        </li>
        <li>
        <ReactGA.OutboundLink
          eventLabel="visita linkedin"
          to="https://www.linkedin.com/in/martafumagalli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square mr-1"></i>  My LinkedIn
        </ReactGA.OutboundLink>
        </li>
      </ul>
    </div>
  )
}

export default Foot;