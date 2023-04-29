import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M4 4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4Z" stroke="#202225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 3V21" stroke="#202225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3V21" stroke="#202225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 9H20" stroke="#202225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 15H20" stroke="#202225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
