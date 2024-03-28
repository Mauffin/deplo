import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import "./search.css"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Search = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
  return (
    <TextField
      id="search"
      type="search"
      name="search"
      placeholder="Buscar..."
      style={{ backgroundColor: 'white',   
      borderRadius: '10px' }}
      size="small"
      sx={{
        '.MuiInputBase-root':{
          borderRadius:"10",
          height:"34",
          display: isSmallScreen ? 'none' : 'inherit',
        },
        '.MuiSvgIcon-root': {
          display: isSmallScreen ? 'none' : 'inherit', 
        },
    }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" >
           
              <SearchIcon  className="search-icon" loading="lazy"/> 
         
          </InputAdornment>
        ),
      }}
    />
  );
}
export default Search