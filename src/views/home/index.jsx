import PdfFileHandler from '../../components/core/PdfFileHandler.jsx';
import PdfSplitterCard from '../../components/core/PdfSplitterCard.jsx';
import Navbar from '../../components/layouts/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';

const HomeView = () => (<>
    <Navbar />
    <HeroSection>
        <PdfFileHandler />
    </HeroSection>
    <div className="container">
        <PdfSplitterCard />
    </div>
</>);



export default HomeView;