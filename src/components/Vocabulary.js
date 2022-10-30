import React from 'react';
import Header from './Header';

const Vocabulary = () => {
  return (
    <>
      <Header />
      <h1> A Note on Methodology</h1>
      <p className="disclaimer">
        Notes on methodology for the site: Disclaimer and Note on Methodology:
        Welcome! This project builds on the work done by{' '}
        <a href="https://github.com/rladiesPHL/2021_datathon">
          R-Ladies Philly JAT Datathon
        </a>
        , and uses data available{' '}
        <a href="https://github.com/rladiesPHL/2021_datathon/tree/main/data">
          here
        </a>
        . This site includes de-identified public docket information on
        offenses, bail, and demographics between 2010 and 2020. The project
        includes census data from the 2020 5-Year American Community Survey. The
        data generally excludes observations where a judge’s name was not
        listed. Please note that any information included in this project or
        contributed to this project is not intended to be legal advice. No part
        of this project is intended to be a political or professional
        endorsement.
      </p>
    </>
  );
};

export default Vocabulary;
