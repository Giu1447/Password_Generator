import './App.css';
import {useState} from 'react';
import {Col, Row, InputGroup, FormControl, FormCheck, Button} from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';

function App() {
    const [password, setPassword] = useState('');
    const [lowercase, setLowercase] = useState(true);
    const [uppercase, setUppercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [length, setLength] = useState(8);

    const generatePassword = () => {
        let characterList = '';
        let generatedPassword = '';

        if (lowercase) {
            characterList += 'abcdefghijklmnopqrstuvwxyz';
        }

        if (uppercase) {
            characterList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        if (numbers) {
            characterList += '0123456789';
        }

        if (symbols) {
            characterList += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        }

        for (let i = 0; i < length; i++) {
            const characterIndex = Math.round(Math.random() * characterList.length);
            generatedPassword += characterList.charAt(characterIndex);
        }

        setPassword(generatedPassword);
    }

    const [checked, setChecked] = useState(true);
    return (
        <div className="App">
            <Row>
                <Col>
                    <h1>Password Generator</h1>
                </Col>
            </Row>

            <div className="settings">
                <Row>
                    <Col>
                        <label>Password Length</label>
                        <InputGroup>
                            <FormControl type="number" value={length} onChange={e => setLength(e.target.value)}/>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Include Lowercase</label>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            checked={lowercase}
                            value="lowercase"
                            onChange={(e) => setLowercase(e.currentTarget.checked)}
                        >
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Include Uppercase</label>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            checked={uppercase}
                            value="uppercase"
                            onChange={(e) => setUppercase(e.currentTarget.checked)}
                        >
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Include Numbers</label>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            checked={numbers}
                            value="numbers"
                            onChange={(e) => setNumbers(e.currentTarget.checked)}
                        >
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Include Symbols</label>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            checked={symbols}
                            value="symbols"
                            onChange={(e) => setSymbols(e.currentTarget.checked)}
                        >
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={generatePassword}>Generate Password</Button>
                    </Col>
                </Row>
                <div className="password">
                    {password && (
                        <Row>
                            <Col>
                                <InputGroup>
                                    <FormControl type="text" value={password} readOnly/>
                                    <Button onClick={() => navigator.clipboard.writeText(password)}>Copy</Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
