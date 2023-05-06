import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { ToastContainer } from 'react-toastify';
import NavBar from './NavBar/NavBar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
     <RouterProvider router={routes}></RouterProvider>
     <Toaster />
    
    </div>
  );
}

export default App;
