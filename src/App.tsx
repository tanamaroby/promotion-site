import { Grid, Stack, Typography, useTheme } from '@mui/material'

function App() {
  const theme = useTheme()
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Stack spacing={1} justifyContent="center" alignItems="center" sx={{ color: theme.palette.common.white }}>
        <Typography variant="h3">Main Homepage</Typography>
        <Typography variant="subtitle1">This is the main homepage of the promotional site</Typography>
      </Stack>
    </Grid>
  )
}

export default App
