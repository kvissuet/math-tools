import _ from 'lodash';

export default ({input, rules}) => {
  let replacement = input
  _.forEach(rules, ({start, end}) => {
    replacement = _.replace(replacement, start, end)
  })
  return replacement
}
