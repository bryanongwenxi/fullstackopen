
function Header() {
  return (
    <div
      className="header"
      course="Half Stack application development"
    />
  );
}

function Content({ title, number }) {
  return (
    <div
      className="content"
      exercise={title}
      part={number}
    />
  );
}

function Total({ num1, num2, num3 }) {
  return (
    <div
      className="total"
      sum={num1 + num2 + num3}
    />
  );
}

export default function App() {
  console.log('test')

  return (
    <section>
      <h1>Test</h1>
      <Header />
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
