import './App.scss';
import Cards from './components/Cards/Cards';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { SectionContent } from './lib/style/generalStyles';
function App() {
  return (
    <>
      <Header />
      <SectionContent columns={2} >
        <Filter />
        <Cards />
      </SectionContent>
    </>
  );
}

export default App;
