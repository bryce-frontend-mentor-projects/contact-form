import { Card } from "./components/Card";
import { FieldSet } from "./components/FieldSet";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="bg-green-200 h-screen flex justify-center items-center">
      <Card>
        <Header>Contact Us</Header>
        <Form>
          <FieldSet label="First Name">
            <Input />
          </FieldSet>
          <FieldSet label="Last Name">
            <Input />
          </FieldSet>
          <FieldSet label="Email Address" className="col-span-2">
            <label>Email Address *</label>
            <Input />
          </FieldSet>
        </Form>
      </Card>
    </div>
  );
}

export default App;
