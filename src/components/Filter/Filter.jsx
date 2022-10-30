import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <FilterLabel>
      Search
      <FilterInput
        type="text"
        name="filter"
        placeholder="Start typing a name"
        value={filter}
        onChange={onFilter}
      ></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
