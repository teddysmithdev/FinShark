import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { TestDataCompany } from "../../Components/Table/testData";
import { CompanyKeyMetrics } from "../../company";

type Props = {};

const data = TestDataCompany;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
        Design guide- This is the design guide for Fin Shark. These are reuable
        components of the app with brief instructions on how to use them.
      </h1>
      <RatioList config={tableConfig} data={data} />
      <Table config={tableConfig} data={data} />
      <h3>
        Table - Table takes in a configuration object and company data as
        params. Use the config to style your table.
      </h3>
    </>
  );
};

export default DesignGuide;
