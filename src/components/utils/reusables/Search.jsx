import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const items = [
  {
    id: 0,
    name: 'Cobol',
  },
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Basic',
  },
  {
    id: 3,
    name: 'PHP',
  },
  {
    id: 4,
    name: 'Java',
  },
];

function Search() {
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>
          id: {item.id}
        </span>
        <span style={{ display: 'block', textAlign: 'left' }}>
          name: {item.name}
        </span>
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder="Personnel search"
            styling={{
              borderRadius: '25px',
              cursor: 'pointer',
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default Search;
