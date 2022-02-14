import logo from './logo.svg';
import Members from './Members';
import './App.css';

const memberInfo =
[
 {
  firstName: "Peter",
  role: "Father, and husband",
  secondName: "Gertrude Simelane",
  offspring: "5",
},

 {
  firstName: "Sibusiso",
  role: "Father, and husband",
  secondName: "Swazi",
  offspring: "4",
 },

 {
  firstName: "Sabelo",
  role: "Father, and husband",
  secondName: "Thembi Dlamini",
  offspring: "2",
 },

 {
  firstName: "Daliza",
  role: "Son",
  secondName: "Gertrude Simelane",
  offspring: "0",
 },

 {
  firstName: "John",
  role: "Father, and husband",
  secondName: "Lillian Dlamini",
  offspring: "2",
 },

{
 firstName: "Lindiwe",
 role: "Mother, and wife",
 secondName: "Bheki Manyatsi",
 offspring: "2"
}
] 

function App() 
{
  return (
    <div>
      <header className="App-header">
       <h1>Mngomezulu Family Tree (Second to Third Generation)</h1>
       {memberInfo.map(member =>
        {const {firstName, role, secondName, offspring} = member;
        return(
            <Members firstName={firstName} role={role} secondName={secondName} offspring={offspring} />
        );
        })}
      </header>
    </div>
  );
}

export default App;
