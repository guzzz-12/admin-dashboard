import { Dispatch, SetStateAction } from "react";
import {TextField, IconButton} from "@mui/material";
import {BiSearchAlt} from "react-icons/bi";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchInput = ({searchTerm, setSearchTerm}: SearchInputProps) => {
  return (
    <TextField
      className="navbar__search-bar"
      size="small"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        endAdornment: (
          <IconButton size="small" disableRipple>
            <BiSearchAlt />
          </IconButton>
        )
      }}
    />
  )
}

export default SearchInput;