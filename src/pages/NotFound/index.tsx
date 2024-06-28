import Header from "../../ui/components/header";
import { Box, Grid, Stack, Typography } from "@mui/material";

export const NotFound = () => {
    return (
        <Grid>
            <Header />
            <Box sx={{
            display: 'flex',
            flexDirection: 'row',  
            alignItems: 'flex-end',   
            justifyContent: {xs:'center', md:'flex-end'}, 
            backgroundImage: {xs:'', md:'url("/img.png")'}, 
            backgroundSize: 'center',
            height: 700,
            paddingRight: {xs: '0', md:'30px'},
            backgroundPosition: 'rightBottom',
            backgroundRepeat: 'no-repeat',

            backgroundColor: '#181B20',
            paddingBottom: {xs:'50px', md:'0px'},
        }}>
            <Box sx={{ 
                padding: '70px', 
                height: {xs:'100%', md:'50%'},
                display: 'flex',  
                flexDirection: 'column',
                alignSelf: {xs:'center', md:'flex-start'},  
                marginTop: 'auto' 
            }}>
                <Typography variant="h6" align="center" style={{ fontSize: '40px', color: '#F6BA19', fontFamily: 'Belleza, sans-serif' }}>
                Em Construção.....
                </Typography>
            </Box>
        </Box>

        </Grid>
    )
}
