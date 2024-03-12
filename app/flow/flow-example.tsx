// app/flow-example.tsx
'use client';

import React from 'react';
import ReactFlow, { Background, Controls, Node, Edge, ConnectionMode, useNodesState, useEdgesState } from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
    { id: '1', position: { x: 50, y: 30 }, data: { label: 'Hellow' } },
    { id: '2', position: { x: 50, y: 100 }, data: { label: 'World' } },
    { id: '3', position: { x: 10, y: 200 }, data: { label: 'Test Node' } },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

const FlowExample = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                connectionMode={ConnectionMode.Loose}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default FlowExample;