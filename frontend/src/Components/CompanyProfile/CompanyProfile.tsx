import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Tile from "../Tile/Tile";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const getCompanyKeyRatios = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyRatios();
  }, []);
  return (
    <>
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />
        </>
      ) : (
        <h1>No data found</h1>
      )}
    </>
  );
};

export default CompanyProfile;
