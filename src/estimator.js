/* eslint-disable no-restricted-properties */
/* eslint-disable max-len */
import outputData from './outputData';
import {
  currentlyInfected, infectionsByRequestedTime, severeCasesByRequestedTime, hospitalBedsByRequestedTime, casesForICUByRequestedTime, casesForVentilatorsByRequestedTime, dollarsInFlight
} from './helpers';

const covid19ImpactEstimator = (data) => {
  // Output
  const impact = {};
  const severeImpact = {};

  // Best Case Estimation
  impact.currentlyInfected = currentlyInfected(data.reportedCases, 10);
  if (data.periodType === 'days') {
    impact.infectionsByRequestedTime = infectionsByRequestedTime(impact.currentlyInfected, Math.pow(2, Math.trunc(data.timeToElapse / 3)));
  } else if (data.periodType === 'weeks') {
    impact.infectionsByRequestedTime = infectionsByRequestedTime(impact.currentlyInfected, Math.pow(2, Math.trunc(data.timeToElapse * 7 / 3)));
  } else {
    impact.infectionsByRequestedTime = infectionsByRequestedTime(impact.currentlyInfected, Math.pow(2, Math.trunc(data.timeToElapse * 30 / 3)));
  }
  impact.severeCasesByRequestedTime = severeCasesByRequestedTime(impact.infectionsByRequestedTime);
  impact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTime(data.totalHospitalBeds, impact.severeCasesByRequestedTime);
  impact.casesForICUByRequestedTime = casesForICUByRequestedTime(impact.infectionsByRequestedTime);
  impact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime(impact.infectionsByRequestedTime);
  impact.dollarsInFlight = dollarsInFlight(impact.infectionsByRequestedTime, data.region.avgDailyIncomeInUSD, data.region.avgDailyIncomePopulation, data.timeToElapse);


  // Severe case estimation
  severeImpact.currentlyInfected = currentlyInfected(data.reportedCases, 50);
  if (data.periodType === 'days') {
    severeImpact.infectionsByRequestedTime = infectionsByRequestedTime(severeImpact.currentlyInfected, Math.pow(2, Math.trunc(data.timeToElapse / 3)));
  } else if (data.periodType === 'weeks') {
    severeImpact.infectionsByRequestedTime = infectionsByRequestedTime(severeImpact.currentlyInfected, Math.pow(2, Math.trunc(data.timeToElapse * 7 / 3)));
  } else {
    severeImpact.infectionsByRequestedTime = infectionsByRequestedTime(severeImpact.currentlyInfected, Math.pow(2, Math.trunc(data.timeToElapse * 30 / 3)));
  }
  severeImpact.severeCasesByRequestedTime = severeCasesByRequestedTime(severeImpact.infectionsByRequestedTime);
  severeImpact.casesForICUByRequestedTime = casesForICUByRequestedTime(severeImpact.infectionsByRequestedTime);
  severeImpact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime(severeImpact.infectionsByRequestedTime);
  severeImpact.dollarsInFlight = dollarsInFlight(severeImpact.infectionsByRequestedTime, data.region.avgDailyIncomeInUSD, data.region.avgDailyIncomePopulation, data.timeToElapse);

  return outputData(data, impact, severeImpact);
};


export default covid19ImpactEstimator;
