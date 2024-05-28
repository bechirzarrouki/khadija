import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './comp/login/Login';
/*admin dashbor */
import Navbar from './comp/navbar/Navbar';
import Notification from './comp/navbar/Notif';
import Dash from './comp/navbar/Dashbor';

/*partie gestion user  */
import Users from './comp/utilisateur/Users';
import Ajouter from './comp/utilisateur/Ajouter';
import Listedesusers from './comp/utilisateur/Listedesusers';
import ConsultPage from './comp/utilisateur/Consultpage';
/*partie gestion  fiche  */

import Listedesfiches from './comp/fiches/Listedesfiches';
import Ajouterfiche from './comp/fiches/Ajouterfiche';
/**gestion des equipment  */
import Equipment from './comp/equipment/Equipment';
import Ajouterequipment from './comp/equipment/Ajouterequiment';
import Consulterequipment from './comp/equipment/Consulterequipment';
/*metrologie */
import Metro from './comp/responsable metrologie/Metro';
import Imprimer2 from './comp/responsable metrologie/Imprimer2';
import Listedesfiche from'./comp/responsable metrologie/Listedesfiche';
/*qualité */
import Qual from './comp/responsable qualite/Qual';
import Verifier from './comp/responsable qualite/Verifier';
import Imprimer from'./comp/responsable qualite/Imprimer';
import Listedesfiche2 from'./comp/responsable qualite/Listedesfiche2';


/*les fiches*/
import Imprimer3 from './comp/les fiche/Imprimer3';
import Balverification from './comp/les fiche/Balance/Balverification';
import CAFverification from './comp/les fiche/Calibre femelle/CAFverification';
import CLverification from './comp/les fiche/Calibre luer/CLverification';
import Chverification from './comp/les fiche/Chronomètre/Chverification';
import Mrverification from'./comp/les fiche/Mètre à ruban/MRverification';
import Minverification from './comp/les fiche/Minuteur/Minverification';
import Regverification from './comp/les fiche/Réglet/Regverification';
import Terverification from './comp/les fiche/Thermomètre Min-Max/Terverification';





/*
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"*/
import GeneratedFormPage from './comp/fiches/from'
import Test from './comp/test'
import FicheDetails from './comp/fiches/FicheDetails'
function App() {
  return (
<div className='App'>
<Router>
<Routes>
      <Route path="/" element={<Login/>}></Route>
      {/*<Route path="/consult" element={<ConsultPage/>}/>
      <Route path='/notif' element={<Notification/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      
      <Route path="/fiche" element={<Fiche/>}></Route>
      <Route path="/Listefichesremplie" element={<Listefichesremplie/>}></Route>
      
       <Route path="/equipment" element={<Equipment />}></Route>
      */}
      <Route path="/navbar" element={<Navbar/>}></Route>
      <Route path="/Ajouter" element={<Ajouter/>}></Route>
      <Route path="/consulteruser" element={<ConsultPage/>}></Route>
      <Route path="/Listedesusers" element={<Listedesusers/>}></Route>
      <Route path="/Ajouter-fiche" element={<Ajouterfiche/>}></Route>
      <Route path="/Listedesfiches" element={<Listedesfiches/>}></Route>
     
      <Route path="/Ajouterequipment" element={<Ajouterequipment />}></Route>
      <Route path="/consultequipment" element={<Consulterequipment />}></Route>
      <Route path="/fiche/:id" element={<FicheDetails />} />
     
   
      <Route path="/espmetro" element={<Metro/>}></Route>
      <Route path="/liste-des-fiche" element={<Listedesfiche/>}></Route>
      <Route path="/imprimer2" element={<Imprimer2/>}></Route>
      <Route path="/espqual" element={<Qual/>}></Route>
      <Route path="/liste-des-fiche2" element={<Listedesfiche2/>}></Route>
      <Route path="/verifie" element={<Verifier/>}></Route>
      <Route path="/imprimer" element={<Imprimer/>}></Route>


      
      <Route path="/bverif" element={< Balverification/>}></Route>
      <Route path="/cfverif" element={<CAFverification/>}></Route>
      <Route path="/clverif" element={<CLverification/>}></Route>
      <Route path="/chverif" element={<Chverification/>}></Route>
      <Route path="/mrverif" element={<Mrverification/>}></Route>
      <Route path="/minverif" element={< Minverification/>}></Route>
      <Route path="/regverif" element={< Regverification/>}></Route>
      <Route path="/thverif" element={<Terverification/>}></Route>
      <Route path="/imprimer3" element={<Imprimer3/>}></Route>
      <Route path="/dash" element={<Dash/>}></Route>

      <Route path="/test" element={<Test/>}></Route>
      <Route path="/form" element={<GeneratedFormPage/>}></Route>
</Routes>
</Router>
</div>
  );
}

export default App;
