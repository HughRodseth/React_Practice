const App = () => {
    const props = {
      name: 'Arto Hellas',
      age: 35,
    }
    
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={props.name} age={props.age} />
        <Hello  name = {props.name} age = {props.age}/>
      </div>
    )
  }

  

  const Hello = ({name, age }) => {
      const bornYear = () => new Date().getFullYear() - age
      return (
        <div>
          <p>Hello {name}, you are {age} years old</p>
          <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }

export default App;