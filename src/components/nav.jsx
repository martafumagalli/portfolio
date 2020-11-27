import React from 'react';
import './style.css';
import Grid from './grid';

const DiafanaDev = () => {

  return (
    <div>
      <header className="mb-5">
      <img src={require(`../img/post-it.png`)} alt="" className="picture"/>
        <h1>Diafana-DEV</h1>
      </header>
      <section>
        <div className="container mt-5">
          Hello and welcome to my portfolio, I'm Marta.<br/>
          As a web developer I need to keep uptospeed with new languages, frameworks and web technologies in general. <br/>
          Here I put together some of the works I developed during my studies or while picking up some new web development skills. <br/><br/>
          <div className="cite">
            Tutorials are good, practice is better ^^
          </div>
        </div>

        <div className="container">
          <Grid />
        </div>
      </section>
    </div>
  );
}  

export default DiafanaDev;