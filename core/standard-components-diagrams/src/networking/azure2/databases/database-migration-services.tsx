import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_MIGRATION_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Database_Migration_Services.svg;strokeColor=none;',
  _width: 64,
  _height: 69,
}

export function DatabaseMigrationServices(props: DiagramNodeProps) {
  return <Shape {...DATABASE_MIGRATION_SERVICES} {...props} />
}
