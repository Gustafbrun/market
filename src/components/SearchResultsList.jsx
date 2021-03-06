import React from "react";
import { LinkListStyled } from "./LinkListStyled";
import ListContainerStyled from "./ListContainerStyled";
import ListHeaderStyled from "./ListHeaderStyled";
import ListItem from "./ListItem";

// Prints all the correct data to a list for crypto.
export default function List(props) {
  const { list } = props;
  return (
    <ListContainerStyled>
      <LinkListStyled>
        <ListHeaderStyled>
        <h3>Search results</h3>
        </ListHeaderStyled>
        {list.length === 0 && (
          <p>Your search did not match any crypto.</p>
        )}
        {list.map((listItem) => (
          <ListItem key={listItem[0]} listItemData={listItem} type="crypto">
            {listItem[1].name}
          </ListItem>
        ))}
      </LinkListStyled>
    </ListContainerStyled>
  );
}
