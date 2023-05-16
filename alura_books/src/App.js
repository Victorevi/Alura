import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';
import LastReleases from './components/LastReleases';
import RecommendationCard from './components/RecommendationCard';
import livro from './img/livro.png';

const AppContainer = styled.div`
    background-image: linear-gradient(90deg, #282c34 35%, #1c1f25);
    color:antiquewhite;
`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <LastReleases/>
      <RecommendationCard
        title="Talves você se interesse por:"
        subtitle="React Native: Componentização fácil"
        description="Aprenda a criação e utilização de componentes de maneira rápida e fácil!"
        image={livro}
      />
    </AppContainer>
  )
};

export default App;