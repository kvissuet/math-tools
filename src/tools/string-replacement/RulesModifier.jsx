import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap'
export default ({rules, setRules}) => {
  const addRuleAction = () => {
    const newRules = [{start:'', end: ''}]
    setRules(_.concat(rules, newRules))
  }

  const modifyRule = (e, index, key) => {
    rules[index][key]=e.target.value
    setRules(_.clone(rules))
  }

  const removeRule = (index) => () => {
    setRules(_.concat(_.slice(rules,0,index), _.slice(rules,index+1)))
  }

  const displayRules = _.map(rules, ({start, end}, index)=> (
    <p key={index}>
      Replace &nbsp;<input value={start} onChange={e => modifyRule(e, index, 'start')} /> with <input value={end} onChange={e => modifyRule(e, index, 'end')} /> &nbsp;
      <Button onClick={removeRule(index)}> Remove Rule </Button>
    </p>
  ));
  return (
    <div style={{margin:'10px'}}>
      <h4> Rules </h4>
      <div style={{margin:'20px'}}>
      {displayRules}
      </div>
      <Button onClick={addRuleAction}> Add rule </Button>
    </div>
  )
}
