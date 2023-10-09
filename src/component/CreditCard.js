import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { cardImg } from '../utils/Constant';


export const CreditCard = () => {
  return (
    <>
      <div className='p-3'>
        <div>
          <Typography variant="h6" gutterBottom>
            Payment method 
          </Typography>
        </div>
        <p  className="ps-2" style={{fontSize:"15px"}}> We accept the following card types:</p>
        <div className="m-0 ps-2 " style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                {
                  cardImg?.map((icon, index) => {
                    return (
                      <div key={index} className="text-center" style={{ width: "2rem" }}>
                        <img  className="w-100 " src={icon.card} alt="" />
                      </div>
                    )
                  })
                }
        </div>
          <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
          <div>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Remember credit card details for next time"
              />
            </Grid>
          </div>
          <div className="p-3">
              <button className=" align-item-center fs-5" style={{
                fontFamily: "sans-serif", fontSize: "1.2rem",
                padding: "5px", backgroundColor: "rgb(102, 47, 162)", borderRadius: "5px", color: "whitesmoke", width: "15rem", border: "0"
              }}>
                Confirm Payment</button>
            </div>

        </Grid>


      </div>

    </>
  );
}