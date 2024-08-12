
function Header({course}) {
  return (
    <h1>{course}</h1>
  );
}

function Content({ parts }) {
  return (
    <div>
      {parts[0].title} {parts[0].number};
      {parts[1].title} {parts[1].number};
      {parts[2].title} {parts[2].number}
    </div>
      
  );
}

function Total({ num1, num2, num3 }) {
  return (
    <div>
      Number of exercises {num1 + num2 + num3}
    </div>
      
    
  );
}

export default function App() {
  console.log('test')
  const parts = [
    {title: 'Fundamentals of React', number: 10},
    {title: 'Using props to pass data', number: 7},
    {title: 'State of a component', number: 14}
  ]

  return (
    <section>
      <Header course="Half Stack application development"/>
      <Content parts={parts}/>
      <Total
        num1={10}
        num2={7}
        num3={14}
      />
    </section>
  );
}

