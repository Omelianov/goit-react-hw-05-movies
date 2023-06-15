import { useLocation, useSearchParams } from 'react-router-dom';
import Container from 'components/Container';
import { FormSearch, InputSearch, ButtonSubmit } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    setSearchParams({ query: value });
  }

  return (
    <Container>
      <FormSearch onSubmit={onSubmitForm}>
        <InputSearch type="text" name="query" />
        <ButtonSubmit type="submit">
          <FaSearch />
        </ButtonSubmit>
      </FormSearch>
    </Container>
  );
}

export default SearchBar;
