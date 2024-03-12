// app/page.tsx
import FlowExample from './flow-example';

export default function Home() {
    return (
        <main className='w-full'>
            <div className='m-10 bg-white'>
                <h1>React Flow Example</h1>
                <FlowExample />
            </div>
        </main>
    );
}