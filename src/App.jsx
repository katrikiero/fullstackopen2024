// App välittää tarpeelliset tiedot kullekin komponentille props:ien avulla

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
    </div>
  )
}

  // Header huolehtii kurssin nimen renderöimisestä.

  const Header = (props) => {
    console.log(props)
    return (
    <div>
      <h1>{props.course}</h1>
      </div>
    );
    }
  
  // Content huolehtii osista ja niiden tehtävämääristä

  const Content = (props) => {
    console.log(props)
    return (
      <div>
        {props.parts.map(part => 
          <p key={part.name}>{part.name} {part.exercises}</p>
        )}
      </div>
    );
  }
  
  // Total huolehtii tehtävien yhteismäärästä

  const Total = (props) => {
    const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    console.log(props)
    return (
      <div>
        <p>Number of exercises: {totalExercises}</p>
      </div>
    );
  }
  

export default App