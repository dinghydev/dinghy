import { Shape } from "@dinghy/base-components";

export default function App() {
    return (
        <Shape _title="Display Example" _direction="vertical">
            <Shape _title="Invisible shape" _display="invisible"/>
            <Shape _title="Invisible parent" _display="invisible">
                <Shape>Invisible parent, only child shown</Shape>
            </Shape>
            <Shape _title="Invisible shape" _display="none"/>
            <Shape _title="Invisible all" _display="none">
                <Shape>Invisible</Shape>
            </Shape>
            <Shape _title="Inactive shape" _display="inactive"/>
            <Shape _title="Inactive parent" _display="inactive">
                <Shape>Active child</Shape>
            </Shape>
            <Shape _title="Show parent as entity" _display="entity">
                <Shape>Invisible child</Shape>
            </Shape>
        </Shape>
    );
}
