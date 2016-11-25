let estemplate = {}

estemplate.ast = () =>
  ({type: 'Program', body: [], sourceType: 'script'})

estemplate.literal = value =>
  ({type: 'Literal', value: Number(value), raw: value})

estemplate.stringLiteral = value =>
  ({type: 'Literal', value: value, raw: '"' + value + '"'})

estemplate.identifier = value =>
  ({type: 'Identifier', name: value})

estemplate.declaration = (id, val) => (
  {
    type: 'VariableDeclaration',
    declarations: [
      {
        type: 'VariableDeclarator',
        id: id,
        init: val
      }
    ],
    kind: 'const'
  }
)

estemplate.funcDeclaration = (...val) => (
  {
    type: 'VariableDeclaration',
    declarations: [
      {
        type: 'VariableDeclarator',
        id: val[0],
        init: {
          type: 'ArrowFunctionExpression',
          id: null,
          params: val[1],
          body: val[2] || '',
          generator: false,
          expression: true
        }
      }
    ],
    kind: 'const'
  }
)

estemplate.fnCall = (val, args) => (
  {
    type: 'ExpressionStatement',
    expression: {
      type: 'CallExpression',
      callee: val,
      arguments: args
    }
  }
)

estemplate.lambda = (...val) => (
  {
    type: 'ExpressionStatement',
    expression: {
      type: 'ArrowFunctionExpression',
      id: null,
      params: val[0],
      body: val[1] || '',
      generator: false,
      expression: true
    }
  }
)

/*  Module Exports estemplate  */
module.exports = estemplate