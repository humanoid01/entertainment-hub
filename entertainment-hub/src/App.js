import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Trending } from './Pages/Trending/Trending';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='trending' element={<Trending />} />
        </Routes>
        {/* <Navbar /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
