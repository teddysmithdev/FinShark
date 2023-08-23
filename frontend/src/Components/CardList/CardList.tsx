import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <h1>No results!</h1>
      )}
    </>
  );
};

export default CardList;
