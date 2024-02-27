import React from "react";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

function SearchPage(props: Props) {
  return <div>SearchPages</div>;
}

export default SearchPage;
