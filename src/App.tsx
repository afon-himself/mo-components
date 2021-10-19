import { Button } from './components/Button/Button';


export function App() {
  return (
    <div className="app">
      <Button type="primary" size="normal" onClick={() => {}}>Some text here</Button>
      <Button type="secondary" size="normal" onClick={() => {}}>Some text here</Button>
      <Button type="tertiary" size="normal" onClick={() => {}}>Some text here</Button>
      <Button type="primary" size="small" onClick={() => {}}>Some text here</Button>
      <Button type="primary" size="medium" onClick={() => {}}>Some text here</Button>
      <Button type="primary" size="large" onClick={() => {}}>Some text here</Button>
      <Button type="primary" size="large" disabled onClick={() => {}}>Some text here</Button>
    </div>
  )
}
