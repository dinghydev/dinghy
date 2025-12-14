import { MoveToHere, Shape } from "@dinghy/base-components";

export default function App() {
    return (
        <Shape _title="Move To Here Example" _direction="vertical">
            <Shape _title="Sources">
                <Source1 />
                <Source1>Source 1 again</Source1>
                <Source1>Source 1 excluded</Source1>
                <Shape>Source2 included</Shape>
                <Shape>Source2 excluded</Shape>
                <Shape>Source three by function</Shape>
                <Shape>None matched</Shape>
            </Shape>
            <Shape _title="Moved To Here">
                <MoveToHere includes="Source1" excludes="excluded">
                    Two sources moved to here
                </MoveToHere>
                <MoveToHere includes="source2" excludes="excluded">
                    Sources match by id
                </MoveToHere>
                <Shape>Regular shape</Shape>
                <MoveToHere
                    includes={(node: any) =>
                        node._props._title.includes("function")}
                >
                    Sources match by Function
                </MoveToHere>
            </Shape>
        </Shape>
    );
}

const Source1 = (props: any) => <Shape {...props} />;
