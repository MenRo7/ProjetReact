import './App.css';
import Header from './components/Header';
import Plate from './components/Plate';

function App() {
  return (
    <>
      <Header/>
      <Plate 
        name="Tacos à l'unité" 
        price="3" 
        description="Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. 
          Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique." 
        img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
      />
      <Plate 
        name="Enchiladas" 
        price="12" 
        description="Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. 
          Chaque bouchée est une explosion de goût qui vous fera revenir pour plus." 
        img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
      />
      <Plate 
        name="Mole Poblano" 
        price="15" 
        description="Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. 
          Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise." 
        img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
      />
    </>
  );
}

export default App;
