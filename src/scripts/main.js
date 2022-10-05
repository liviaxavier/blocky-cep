(function () {
  const importXMLButton = document.querySelector("button#import-xml");
  const loadBlocksButton = document.querySelector("button#loadBlocks");
  const docXMLTextArea = document.querySelector("textarea#doc-xml");

  function save() {
    Blockly.serialization.workspaces.save(Blockly.common.getMainWorkspace());
  }

  function handleConvert() {
    save();
    let code = Blockly.JavaScript.workspaceToCode(
      Blockly.common.getMainWorkspace()
    );
    document.querySelector("#preview-code").textContent = code;
    docXMLTextArea.value = "";
    docXMLTextArea.classList.add("hidden");
    loadBlocksButton.classList.add("hidden");
    importXMLButton.classList.remove("hidden");
  }

  document.querySelector("#convert").addEventListener("click", handleConvert);

  Blockly.inject("blocklyDiv", {
    toolbox: {
      kind: "categoryToolbox",
      contents: [logic, loops, math, text, lists, colour, variables, functions],
    },
    scrollbars: false,
  });
})();
