import './App.scss';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { SectionContent } from './lib/style/generalStyles';
function App() {
  return (
    <>
      <Header />
      <SectionContent columns={2} >
        <SearchBar />
        <Cards />
      </SectionContent>
    </>
  );
}

export default App;
