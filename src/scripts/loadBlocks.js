(function () {
  const loadBlocksButton = document.querySelector("button#loadBlocks");
  const importXMLButton = document.querySelector("button#import-xml");
  const docXMLTextArea = document.querySelector("textarea#doc-xml");

  function importXML() {
    docXMLTextArea.classList.remove("hidden");
    loadBlocksButton.classList.remove("hidden");
    importXMLButton.classList.add("hidden");
  }

  function loadBlock() {
    // xml is the same block xml you stored
    const xml = docXMLTextArea.value;
    if (typeof xml != "string" || xml.length < 5) {
      return false;
    }
    try {
      var dom = Blockly.Xml.textToDom(xml);
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(dom, Blockly.mainWorkspace);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  document.querySelector("#loadBlocks").addEventListener("click", loadBlock);
  document.querySelector("#import-xml").addEventListener("click", importXML);
})();
