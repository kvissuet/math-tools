import React, { useState, useEffect } from 'react';
import stringReplacer from './string-replacer.js'
import RuleModifier from './RulesModifier.jsx'
import {Form} from 'react-bootstrap'
export default () => {
  const [input, setInput] = useState('');
  const [rules, setRules] = useState([{start: '<', end: '('}, {start: '>', end: ')'}])
  const [replacedString, setReplacedString] = useState('')
  const onChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    setReplacedString(stringReplacer({input, rules}))
  }, [input, rules])

  return (
    <div>
      <h2> Character Replacement Tool </h2>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Input Text Here</Form.Label>
        <Form.Control value={input} onChange={(e) => onChange(e)} as="textarea" rows="3" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>With Replacements</Form.Label>
        <Form.Control disabled value={replacedString} as="textarea" rows="3" />
      </Form.Group>

      <RuleModifier {...{rules, setRules}}/>

    </div>
  )
}
