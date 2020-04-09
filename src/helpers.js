/* eslint-disable max-len */
const currentlyInfected = (cases, multiples) => cases * multiples;

const infectionsByRequestedTime = (infected, duration) => infected * duration;

const severeCasesByRequestedTime = (infectionsByTime) => infectionsByTime * 0.15;

const hospitalBedsByRequestedTime = (totalBeds, severeCases) => Math.trunc((totalBeds * 0.35) - severeCases);

const casesForICUByRequestedTime = (infectionsByTime) => infectionsByTime * 0.05;

const casesForVentilatorsByRequestedTime = (infectionsByTime) => infectionsByTime * 0.02;

const dollarsInFlight = (infectionsByTime, income, population, duration) => infectionsByTime * income * population * duration;

export {
  currentlyInfected,
  infectionsByRequestedTime,
  severeCasesByRequestedTime,
  hospitalBedsByRequestedTime,
  casesForICUByRequestedTime,
  casesForVentilatorsByRequestedTime,
  dollarsInFlight

};
