import React, { useEffect, useState } from "react";
import { CompanyBalanceSheet } from "../../company";
import { useOutletContext } from "react-router-dom";
import RatioList from "../RatioList/RatioList";
import { getBalanceSheet } from "../../api";
import Table from "../Table/Table";

type Props = {};

const config = [
  {
    label: "Cash",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
  },
  {
    label: "Inventory",
    render: (company: CompanyBalanceSheet) => company.inventory,
  },
  {
    label: "Other Current Assets",
    render: (company: CompanyBalanceSheet) => company.otherCurrentAssets,
  },
  {
    label: "Minority Interest",
    render: (company: CompanyBalanceSheet) => company.minorityInterest,
  },
  {
    label: "Other Non-Current Assets",
    render: (company: CompanyBalanceSheet) => company.otherNonCurrentAssets,
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
  },
];

const BalanceSheet = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyBalanceSheet>();
  useEffect(() => {
    const getCompanyData = async () => {
      const value = await getBalanceSheet(ticker!);
      setCompanyData(value?.data[0]);
    };
    getCompanyData();
  }, []);
  return (
    <>
      {companyData ? (
        <RatioList config={config} data={companyData} />
      ) : (
        <h1>Company data not found</h1>
      )}
    </>
  );
};

export default BalanceSheet;
