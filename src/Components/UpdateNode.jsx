import { useState, useEffect } from 'react';
import { useReactFlow } from 'reactflow';


const UpdateNode = ({
  selectedNode,
  setNodeSelected,
  setNodes,
  setNewNodeLabel,
}) => {
  const [nodeName, setNodeName] = useState(selectedNode.data['label']);


  let id = selectedNode.id;

  useEffect(() => {



    setNodeName(selectedNode.data['label']);
  }, [id]);


  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === selectedNode.id) {


          node.data = {
            ...node.data,
            label: nodeName,
          };
        }

        return node;
      })
    );
  }, [selectedNode, nodeName, setNodes]);


  const mainSidebar = () => {
    setNodeSelected(false);
  };

  return (

    <>
      {/* <div style={{ width: `100%`, height: 2, background: 'grey' }}></div> */}
      <div className="update">
        <div className="back">
          <span
            className="material-symbols-outlined"
            style={{ marginRight: 10, cursor: 'pointer' }}
            onClick={mainSidebar}
          >
            arrow_back
          </span>
          <h2 style={{ paddingLeft: 50, margin: 0 }}>Message</h2>
        </div>
      </div>
      <div style={{ width: `100%`, height: 2, background: 'grey' }}></div>

      <div className="update">
        <h3>Text:</h3>
        <textarea
          rows="4"
          cols="25"
          value={nodeName}
          onChange={(evt) => {
            setNodeName(evt.target.value);

          }}
          style={{ marginBottom: 15, borderRadius: 5 }}
        />
      </div>
      <div style={{ width: `100%`, height: 2, background: 'grey' }}></div>
    </>


  );
};

export default UpdateNode;
