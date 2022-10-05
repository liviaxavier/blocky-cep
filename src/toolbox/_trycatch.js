  Blockly.common.defineBlocksWithJsonArray([
    {
        "type": "logic_trycatch",
        "message0": "try %1 catch %2",
        "args0": [
          {
            "type": "input_statement",
            "name": "try"
          },
          {
            "type": "input_value",
            "name": "catch"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }    
  ]);

  Blockly.JavaScript['logic_trycatch'] = function(block) {
    var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
    var value_catch = Blockly.JavaScript.valueToCode(block, 'catch', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 
`
    try{
        ${statements_try}
    } catch(error){ 
        throw ${value_catch}
    }
`;
    return code;
  };