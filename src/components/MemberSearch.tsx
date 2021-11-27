import React from "react";

interface MemberSearchInput {
  setMemberSearch: any;
}

export default function MemberSearch({ setMemberSearch }: MemberSearchInput) {
  function onChange(e: any) {
    setMemberSearch(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div id="input">
      <input
        onChange={onChange}
        placeholder="Search Member"
        data-testid="search"
      ></input>
    </div>
  );
}
