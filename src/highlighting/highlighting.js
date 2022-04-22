import { languageDefinitions } from './languages'

export default function highlight(code, language) {
  let definition = languageDefinitions[language]
  if (!definition) {
    return code
  }

  console.log('Hightlighting', definition.rules)
  let tokens = []

  let pointer = 0
  let noMatch = false
  while (!noMatch && pointer < code.length) {
    noMatch = true
    let closest = null
    for (let rule of definition.rules) {
      let text = code.substring(pointer)
      for (let pattern of rule.patterns) {
        let match = pattern.exec(text)
        if (!match) {
          continue
        }

        let token_text = match[0]
        if (match.groups) {
          console.log(match.groups)
        }
        let position = pointer + match.index
        let token = {
          index: position,
          text: token_text,
          classes: rule.classes
        }
        if (!closest) {
          closest = token
        } else if (token.index < closest.index) {
          closest = token
        }
      }

    }

    if (closest) {
      pointer = closest.index + closest.text.length
      noMatch = false
      tokens.push(closest)
    }
  }

  let result = code
  tokens.reverse()

  for (let token of tokens) {
    let classes = token.classes.join(' ')
    let new_code = `<span class="${classes}">${token.text}</span>`

    let token_start = token.index
    let token_end = token.index + token.text.length
    result = result.substring(0, token_start) + new_code + result.substring(token_end)
  }

  return result
}
