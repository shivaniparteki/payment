import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const bankName = [
  
  {
    value: 'SBI',
    label: 'State Bank Of India',
  },
  {
    value: 'IC',
    label: 'ICICI Bank',
  },
  {
    value: 'BTC',
    label: 'HDFC Bank',
  },
  {
    value: 'JPY',
    label: 'AXIS Bank',
  },
  {
    value: 'KTC',
    label: 'Kotak Bank',
  },
];

export const NetBanking = () => {
  return (
    <>
      <Box
       className='py-4'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="SBI"
            helperText="Please select your Bank"
          >
            {bankName.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </>
  );
}
