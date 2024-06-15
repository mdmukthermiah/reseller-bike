import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast'
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='mx-w-[1440] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
