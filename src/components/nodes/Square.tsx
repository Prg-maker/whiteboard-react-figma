import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";
import '@reactflow/node-resizer/dist/style.css'

export function Square(props: NodeProps) {

  const selected = props.selected;

  return (
    <div className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px]">

      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />

      <Handle 
        type="source"
        id="right" 
        position={Position.Right} 
        className="-right-5 w-3 h-3 border-2  bg-blue-400/80"
      />

      <Handle 
        type="source"
        id="left" 
        position={Position.Left} 
        className="-left-5 w-3 h-3 border-2  bg-blue-400/80"

      />

      <Handle 
        type="source"
        id="top" 
        position={Position.Top} 
        className="-top-5 w-3 h-3 border-2  bg-blue-400/80"
      />

      <Handle 
        type="source"
        id="bottom" 
        position={Position.Bottom} 
        className="-bottom-5 w-3 h-3 border-2  bg-blue-400/80"

      />
      

    </div>
  );
}
