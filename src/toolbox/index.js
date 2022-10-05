const logic = {
   kind: 'category', contents: [
     {
       kind:'block', type: "controls_if",
     },
     {
       kind:'block', type: "logic_compare",
     },
     {
       kind:'block', type: "logic_operation",
     },
     {
       kind:'block', type: "logic_negate",
     },
     {
       kind:'block', type: "logic_boolean",
     },
     {
       kind:'block', type: "logic_null",
     },
     {
       kind:'block', type: "logic_ternary",
     },
     {
       kind:'block', type: "logic_trycatch",
     },
     {
       kind:'block', type: "async_fn",
     },
     {
       kind:'block', type: "await_fn",
     },
   ],
   name: "Logic",
   colour: "210",
 };

const loops = {
   kind: 'category', contents: [
     {
       value: [
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "10",
             },
             kind:'block', type: "math_number",
           },
           name: "TIMES",
         },
       ],
       kind:'block', type: "controls_repeat_ext",
     },
     {
       kind:'block', type: "controls_whileUntil",
     },
     {
       value: [
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "1",
             },
             kind:'block', type: "math_number",
           },
           name: "FROM",
         },
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "10",
             },
             kind:'block', type: "math_number",
           },
           name: "TO",
         },
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "1",
             },
             kind:'block', type: "math_number",
           },
           name: "BY",
         },
       ],
       kind:'block', type: "controls_for",
     },
     {
       kind:'block', type: "controls_forEach",
     },
     {
       kind:'block', type: "controls_flow_statements",
     },
   ],
   name: "Loops",
   colour: "120",
 };

const math = {
   kind: 'category',
   contents: [
     {
       kind: 'block', type: "math_number",
     },
     {
       value: [
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "1",
             },
             kind: 'block', type: "math_number",
           },
           _name: "A",
         },
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "1",
             },
             kind: 'block', type: "math_number",
           },
           _name: "B",
         },
       ],
       kind: 'block', type: "math_arithmetic",
     },
     {
       value: [
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "9",
             },
             kind: 'block', type: "math_number",
           },
           _name: "NUM",
         },
       ],
       kind: 'block', type: "math_single",
     },
     {
       value: [
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "45",
             },
             kind: 'block', type: "math_number",
           },
           _name: "NUM",
         },
       ],
       kind: 'block', type: "math_trig",
     },
     {
       kind: 'block', type: "math_constant",
     },
     {
       value: [
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "0",
             },
             kind: 'block', type: "math_number",
           },
           _name: "NUMBER_TO_CHECK",
         },
       ],
       kind: 'block', type: "math_number_property",
     },
     {
       value: [
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "3.1",
             },
             kind: 'block', type: "math_number",
           },
           _name: "NUM",
         },
       ],
       kind: 'block', type: "math_round",
     },
     {
       kind: 'block', type: "math_on_list",
     },
     {
       value: [
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "64",
             },
             kind: 'block', type: "math_number",
           },
           _name: "DIVIDEND",
         },
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "10",
             },
             kind: 'block', type: "math_number",
           },
           _name: "DIVISOR",
         },
       ],
       kind: 'block', type: "math_modulo",
     },
     {
       value: [
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "50",
             },
             kind: 'block', type: "math_number",
           },
           _name: "VALUE",
         },
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "1",
             },
             kind: 'block', type: "math_number",
           },
           _name: "LOW",
         },
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "100",
             },
             kind: 'block', type: "math_number",
           },
           _name: "HIGH",
         },
       ],
       kind: 'block', type: "math_constrain",
     },
     {
       value: [
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "1",
             },
             kind: 'block', type: "math_number",
           },
           _name: "FROM",
         },
         {
           shadow: {
             field: {
               _name: "NUM",
               __text: "100",
             },
             kind: 'block', type: "math_number",
           },
           _name: "TO",
         },
       ],
       kind: 'block', type: "math_random_int",
     },
     {
       kind: 'block', type: "math_random_float",
     },
   ],
   name: "Math",
   colour: "230",
 };

const text = {
  kind: "category",
  name: "Text",
  colour: "160",
  contents: [
    {
      kind: "block",
      type: "text",
    },
    {
      kind: "block",
      type: "text_join",
    },
    {
      value: [
        {
          shadow: {
            kind: "block",
            type: "text",
          },
          _name: "TEXT",
        },
      ],
      kind: "block",
      type: "text_append",
    },
    {
      value: [
        {
          shadow: {
            field: {
              _name: "TEXT",
              __text: "abc",
            },
            kind: "block",
            type: "text",
          },
          _name: "VALUE",
        },
      ],
      kind: "block",
      type: "text_length",
    },
    {
      value: [
        {
          shadow: {
            field: {
              name: "TEXT",
            },
            kind: "block",
            type: "text",
          },
          name: "VALUE",
        },
      ],
      kind: "block",
      type: "text_isEmpty",
    },
    {
      value: [
        {
          block: [
            {
              field: {
                _name: "VAR",
                __text: "{textVariable}",
              },
              kind: "block",
              type: "variables_get",
            },
          ],
          _name: "VALUE",
        },
        {
          shadow: {
            field: {
              _name: "TEXT",
              __text: "abc",
            },
            kind: "block",
            type: "text",
          },
          _name: "FIND",
        },
      ],
      kind: "block",
      type: "text_indexOf",
    },
    {
      value: [
        {
          block: [
            {
              field: {
                _name: "VAR",
                __text: "{textVariable}",
              },
              kind: "block",
              type: "variables_get",
            },
          ],
          _name: "VALUE",
        },
      ],
      kind: "block",
      type: "text_charAt",
    },
    {
      value: [
        {
          block: [
            {
              field: {
                _name: "VAR",
                __text: "{textVariable}",
              },
              kind: "block",
              type: "variables_get",
            },
          ],
          _name: "STRING",
        },
      ],
      kind: "block",
      type: "text_getSubstring",
    },
    {
      value: [
        {
          shadow: {
            field: {
              _name: "TEXT",
              __text: "abc",
            },
            kind: "block",
            type: "text",
          },
          _name: "TEXT",
        },
      ],
      kind: "block",
      type: "text_changeCase",
    },
    {
      value: [
        {
          shadow: {
            field: {
              _name: "TEXT",
              __text: "abc",
            },
            kind: "block",
            type: "text",
          },
          _name: "TEXT",
        },
      ],
      kind: "block",
      type: "text_trim",
    },
    {
      value: [
        {
          shadow: {
            field: {
              _name: "TEXT",
              __text: "abc",
            },
            kind: "block",
            type: "text",
          },
          _name: "TEXT",
        },
      ],
      kind: "block",
      type: "text_print",
    },
    {
      value: [
        {
          shadow: {
            field: {
              _name: "TEXT",
              __text: "abc",
            },
            kind: "block",
            type: "text",
          },
          _name: "TEXT",
        },
      ],
      kind: "block",
      type: "text_prompt_ext",
    },
  ],
};

const lists = {
   kind: 'category', contents: [
     {
       mutation: {
         items: "0",
       },
       kind:'block', type: "lists_create_with",
     },
     {
       kind:'block', type: "lists_create_with",
     },
     {
       value: [
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "5",
             },
             kind:'block', type: "math_number",
           },
           name: "NUM",
         },
       ],
       kind:'block', type: "lists_repeat",
     },
     {
       kind:'block', type: "lists_length",
     },
     {
       kind:'block', type: "lists_isEmpty",
     },
     {
       value: [
         {
           kind: 'category', contents: [
             {
               field: {
                 name: "VAR",
                 __text: "{listVariable}",
               },
               kind:'block', type: "variables_get",
             },
           ],
           name: "VALUE",
         },
       ],
       kind:'block', type: "lists_indexOf",
     },
     {
       value: [
         {
           kind: 'category', contents: [
             {
               field: {
                 name: "VAR",
                 __text: "{listVariable}",
               },
               kind:'block', type: "variables_get",
             },
           ],
           name: "VALUE",
         },
       ],
       kind:'block', type: "lists_getIndex",
     },
     {
       value: [
         {
           kind: 'category', contents: [
             {
               field: {
                 name: "VAR",
                 __text: "{listVariable}",
               },
               kind:'block', type: "variables_get",
             },
           ],
           name: "LIST",
         },
       ],
       kind:'block', type: "lists_setIndex",
     },
     {
       value: [
         {
           kind: 'category', contents: [
             {
               field: {
                 name: "VAR",
                 __text: "{listVariable}",
               },
               kind:'block', type: "variables_get",
             },
           ],
           name: "LIST",
         },
       ],
       kind:'block', type: "lists_getSublist",
     },
     {
       value: [
         {
           shadow: {
             field: {
               name: "TEXT",
               __text: ",",
             },
             kind:'block', type: "text",
           },
           name: "DELIM",
         },
       ],
       kind:'block', type: "lists_split",
     },
     {
       kind:'block', type: "lists_sort",
     },
   ],
   name: "Lists",
   colour: "260",
 }

 const colour = {
   kind: 'category', contents: [
     {
       kind:'block', type: "colour_picker",
     },
     {
       kind:'block', type: "colour_random",
     },
     {
       value: [
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "100",
             },
             kind:'block', type: "math_number",
           },
           name: "RED",
         },
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "50",
             },
             kind:'block', type: "math_number",
           },
           name: "GREEN",
         },
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "0",
             },
             kind:'block', type: "math_number",
           },
           name: "BLUE",
         },
       ],
       kind:'block', type: "colour_rgb",
     },
     {
       value: [
         {
           shadow: {
             field: {
               name: "COLOUR",
               __text: "#ff0000",
             },
             kind:'block', type: "colour_picker",
           },
           name: "COLOUR1",
         },
         {
           shadow: {
             field: {
               name: "COLOUR",
               __text: "#3333ff",
             },
             kind:'block', type: "colour_picker",
           },
           name: "COLOUR2",
         },
         {
           shadow: {
             field: {
               name: "NUM",
               __text: "0.5",
             },
             kind:'block', type: "math_number",
           },
           name: "RATIO",
         },
       ],
       kind:'block', type: "colour_blend",
     },
   ],
   name: "Colour",
   colour: "20",
 }

 const variables = {
   kind:'category',
   name: "Variables",
   colour: "330",
   custom: "VARIABLE",
 }
 const functions = {
   kind: 'category',
   name: "Functions",
   colour: "290",
   custom: "PROCEDURE",
 }
//  {
//  },

