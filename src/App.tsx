import React, { ReactElement, ReactNode, useState } from 'react';
import './App.css';


// Conventional props
function Heading({ title }: {title: string}) {
  return <h1>{title}</h1>
}

function HeadingWithContent({ children }: {children: ReactNode}): ReactElement {
  return <h1>{children}</h1>
}

// default props
const containerDefaultPorps = {
  heading: <h1>Default Heading</h1>
}

type ContainerProps = { children: ReactNode} & typeof containerDefaultPorps
function Container({ heading, children }: ContainerProps) {
  return (
    <div>
      {heading}
      {children}
    </div>
  )
}

Container.defaultProps = containerDefaultPorps;

// Functional Props
function TextWithNumber({ children }: { children: (num: number | null) => ReactNode }): ReactElement {
  const [num, setNum] = useState<number | null>(1)
  return (
    <div>
      <button onClick={() => setNum(prev => (prev ?? 0) + 1)}>Add</button>
      {children(num)}
    </div>
  )
}

// Generics around components

function List<itemList>({
  items,
  render
}: { items: itemList[], render: (value: itemList) => ReactNode}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      <p>Conventional Props</p>
      <Heading  title='hello there'/>
      <HeadingWithContent>
        Hello there as children prop
      </HeadingWithContent>
      <p>Default Props</p>
      <Container>
        <p>This is the children for the component with default props</p>
      </Container>
      <p>Functional Props</p>
      <TextWithNumber>
        {(num = 0) => <p>The number is {num}</p>}
      </TextWithNumber>
      <p>Generics</p>
      <List items={[{value: 'Jack'}, {value: 'Sadie'}, {value: 'Philip'}]} render={(item) => <span>{item.value}</span>}/>
    </div>
  );
}

export default App;
