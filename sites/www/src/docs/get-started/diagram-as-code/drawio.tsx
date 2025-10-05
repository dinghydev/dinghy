import { Shape } from "@dinghy/base-components";
import { Client } from "@dinghy/standard-components-diagrams/awsGeneralResources";
import { AwsCloud } from "@dinghy/standard-components-diagrams/awsGroups";
import { PostgreSqlInstance } from "@dinghy/standard-components-diagrams/awsDatabase";
import { Activity } from "@dinghy/standard-components-diagrams/uml25";

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
