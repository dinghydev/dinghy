import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_DATABASE_MIGRATION_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Database_Migration_Services.svg;',
  _width: 50,
  _height: 50,
}

export function AzureDatabaseMigrationServices(props: DiagramNodeProps) {
  return <Shape {...AZURE_DATABASE_MIGRATION_SERVICES} {...props} />
}
