import _ from 'lodash';

export default ({input, rules}) => {
  let replacement = input
  _.forEach(rules, ({start, end}) => {
    replacement = _.replace(replacement,new RegExp(start, "g"), end)
  })
  return replacement
}
