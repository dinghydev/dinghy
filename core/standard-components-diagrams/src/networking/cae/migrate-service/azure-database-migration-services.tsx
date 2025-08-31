import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_DATABASE_MIGRATION_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Database_Migration_Services.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AzureDatabaseMigrationServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_DATABASE_MIGRATION_SERVICES}
      {...props}
      _style={extendStyle(AZURE_DATABASE_MIGRATION_SERVICES, props)}
    />
  )
}
