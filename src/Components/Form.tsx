import React, { useState } from "react";

type MinhAndChiGoesToZanarkad = {
  handleSubmit: any;
  history: any;
};

// EHM YEAH MINA FROM TWICE -> MATATE

function Form({ handleSubmit, history }: MinhAndChiGoesToZanarkad) {
  const [searchEntry, setSearchEntry] = useState("");
  const update_Search_Input = (e: any) => {
    setSearchEntry(e.target.value);
  };

  function onSubmit(e: any) {
    handleSubmit(e, history, searchEntry);
  }
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search ... Twice ..."
        onChange={update_Search_Input}
        value={searchEntry}
      />

      <button
        type="submit"
        className={`search-button ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
      >
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#ffffff"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}

export default Form;
