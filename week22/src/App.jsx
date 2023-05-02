import './App.css';
import HeroCard from './Superheroes';
import superheroesJSON from './SuperheroesData.jsx';

function App() {
  const superheroes=JSON.parse(superheroesJSON);
  return (
    <>
    <h2 className='heading'>Супергерои</h2>
    <main className="main">
      {
        superheroes.map ((hero) => 
        <HeroCard key={hero.name} name={hero.name} universe={hero.universe} alterego={hero.alterego} occupation={hero.occupation} friends={hero.friends} superpowers={hero.superpowers} info={hero.info} url={hero.url}></HeroCard>
        )
      }
    </main>
    </>
  );
}

export default App;
