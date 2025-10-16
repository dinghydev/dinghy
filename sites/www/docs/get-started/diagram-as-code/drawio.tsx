import { Shape } from "@dinghy/base-components";
import { Client } from "@dinghy/diagrams/entitiesAwsGeneralResources";
import { AwsCloud } from "@dinghy/diagrams/containersAwsGroups";
import { PostgreSqlInstance } from "@dinghy/diagrams/entitiesAwsDatabase";
import { Activity } from "@dinghy/diagrams/dependenciesUml25";

export default function App() {
    return (
        <Shape _title="draw.io example">
            <Client>
                <Activity _dependsOn="Database" />
            </Client>
            <AwsCloud>
                <Database />
            </AwsCloud>
        </Shape>
    );
}

const Database = (props: any) => <PostgreSqlInstance {...props} />;
