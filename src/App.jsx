import NavBar from './Components/NavBar/NavBar'
import Jobs from './Components/JobDiv/Jobs'
import Value from './Components/ValueDiv/Value'
import Search from './Components/SearchDiv/Search'
import Footer from './Components/FooterDiv/FooterDiv'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
     <NavBar />
     <Search />
     <Jobs />
     <Value />
     <Footer />
    </div>
  );
}

export default App