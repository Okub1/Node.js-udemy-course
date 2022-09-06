import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: blueGrey[800],
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar/>
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
