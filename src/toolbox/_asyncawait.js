Blockly.common.defineBlocksWithJsonArray([
    {
        "type": "async_fn",
        "message0": "async %1 parameter %2 %3",
        "args0": [
          {
            "type": "field_input",
            "name": "fn_name",
            "text": "function name"
          },
          {
            "type": "field_variable",
            "name": "param",
            "variable": "item"
          },
          {
            "type": "input_statement",
            "name": "async_function"
          }
        ],
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
  ]);

Blockly.JavaScript['async_fn'] = function(block) {
    var text_fn_name = block.getFieldValue('fn_name');
    var variable_param = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('param'), Blockly.Variables.NAME_TYPE);
    var statements_async_function = Blockly.JavaScript.statementToCode(block, 'async_function');
    // TODO: Assemble JavaScript into code variable.
    var code = 
`
async function ${text_fn_name}(${variable_param}) {
    ${statements_async_function}
}
`
    return code;
};

Blockly.common.defineBlocksWithJsonArray([
    {
        "type": "await_fn",
        "message0": "await %1",
        "args0": [
          {
            "type": "input_value",
            "name": "await_function"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
  ]);

Blockly.JavaScript['await_fn'] = function(block) {
    var value_await_function = Blockly.JavaScript.valueToCode(block, 'await_function', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `await ${value_await_function}`
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};