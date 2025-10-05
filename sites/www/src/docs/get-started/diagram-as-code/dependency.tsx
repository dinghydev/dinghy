import { Dependency, Shape } from "@dinghy/base-components";

export default function App() {
    return (
        <Shape _title="Dependency example">
            <Shape _dependsOn="B">A</Shape>
            <Shape _title="B">
                <Dependency _dependsOn="C" />
            </Shape>
            <Shape>C</Shape>
        </Shape>
    );
}
