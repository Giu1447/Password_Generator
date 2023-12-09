import React, { useState } from 'react';
import { Col, Row, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Generator() {
    const [password, setPassword] = useState('');
    const [lowercase, setLowercase] = useState(true);
    const [uppercase, setUppercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [length, setLength] = useState(8);
    const [copied, setCopied] = useState(false);

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
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
    };

    return (
        <div className="generator">
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
                            <FormControl type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Include Lowercase</label>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check-lowercase"
                            type="checkbox"
                            variant="outline-primary"
                            checked={lowercase}
                            onChange={() => setLowercase(!lowercase)}
                        >
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Include Uppercase</label>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check-uppercase"
                            type="checkbox"
                            variant="outline-primary"
                            checked={uppercase}
                            onChange={() => setUppercase(!uppercase)}
                        >
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Include Numbers</label>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check-numbers"
                            type="checkbox"
                            variant="outline-primary"
                            checked={numbers}
                            onChange={() => setNumbers(!numbers)}
                        >
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Include Symbols</label>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check-symbols"
                            type="checkbox"
                            variant="outline-primary"
                            checked={symbols}
                            onChange={() => setSymbols(!symbols)}
                        >
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={generatePassword}>
                            Generate Password
                        </Button>
                    </Col>
                </Row>
                <div className="password">
                    {password && copied && (
                        <Alert variant="dark" onClose={() => setCopied(false)} dismissible>
                            Password copied
                        </Alert>
                    )}
                    <Row>
                        <Col>
                            <InputGroup>
                                <FormControl type="text" value={password} readOnly/>
                                <Button onClick={handleCopy}>Copy</Button>
                            </InputGroup>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
}

export default Generator;
