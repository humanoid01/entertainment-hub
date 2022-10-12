import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Movies } from './Pages/Movies/Movies';
import { Search } from './Pages/Search/Search';
import { Series } from './Pages/Series/Series';
import { Trending } from './Pages/Trending/Trending';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Trending />} />
          <Route path='movies' element={<Movies />} />
          <Route path='series' element={<Series />} />
          <Route path='search' element={<Search />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
