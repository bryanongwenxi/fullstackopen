
function Header({course}) {
  return (
    <h1>{course}</h1>
  );
}

function Content({ title, number }) {
  return (
    <div>
      {title} {number}
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

  return (
    <section>
      <Header course="Half Stack application development"/>
      <Content
        title={'Fundamentals of React'}
        number={10}
      />
      <Content
        title={'Using props to pass data'}
        number={7}
      />
      <Content
        title={'State of a component'}
        number={14}
      />
      <Total
        num1={10}
        num2={7}
        num3={14}
      />
    </section>
  );
}

