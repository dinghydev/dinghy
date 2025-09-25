import { Shape } from "@dinghy/base-components";

export default function App() {
    return (
        <Shape _title="Basic example">
            <Shape _dependsOn="B">A</Shape>
            <Shape>B</Shape>
        </Shape>
    );
}
