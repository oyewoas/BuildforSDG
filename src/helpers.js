const currentlyInfected = (cases, multiples) => cases * multiples;

const infectionsByRequestedTime = (infected, duration) => infected * duration;

const severeCasesByRequestedTime = (infectionsByTime) => infectionsByTime * 0.15;

const hospitalBedsByRequestedTime = (totalBeds, severeCases) => severeCases - (totalBeds * 0.35);

const casesForICUByRequestedTime = (infectionsByTime) => infectionsByTime * 0.05;

const casesForVentilatorsByRequestedTime = (infectionsByTime) => infectionsByTime * 0.02;

// eslint-disable-next-line max-len
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
