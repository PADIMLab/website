import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

export function Footer() {
    return (
        <Grid container spacing={1} paddingX={{xs: 10, md:20}} paddingY={5} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#181B20', borderTop: 1, borderColor: '#F33F44'}}>
            <Grid item xs={5} md={8} lg={2}>
                <Stack spacing={2}>
                <div>
                <span style={{ color: 'white', marginRight: '2px', fontSize: '40px' }}>P</span>
                <span style={{ color: '#F33F44', marginRight: '2px', fontSize: '40px' }}>A</span>
                <span style={{ color: '#FFF', marginRight: '2px', fontSize: '40px' }}>D</span>
                <span style={{ color: '#F33F44', marginRight: '2px',fontSize: '40px' }}>I</span>
                <span style={{ color: '#FFF', marginRight: '2px', fontSize: '40px' }}>M</span>
                <span style={{ color: '#F6BA19', marginRight: '2px', fontSize: '40px'  }}>Lab</span>
            </div>


                    <Typography color={'#F6BA19'}>Universidade Federal do Cariri<br />
                        UFCA</Typography>
                    <Typography color={'#F6BA19'}>Avenida Tenente Raimundo Rocha<br />
                        1639</Typography>
                    <Typography color={'#F6BA19'}>Juazeiro do Norte</Typography>
                    <Typography color={'#F6BA19'}>contato: paola.accioly@ufca.edu.br </Typography>
                </Stack>
            </Grid>

        </Grid>
    );
}
