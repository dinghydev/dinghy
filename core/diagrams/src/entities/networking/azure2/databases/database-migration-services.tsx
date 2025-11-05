import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MIGRATION_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Database_Migration_Services.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 69,
}

export function DatabaseMigrationServices(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_MIGRATION_SERVICES}
      {...props}
      _style={extendStyle(DATABASE_MIGRATION_SERVICES, props)}
    />
  )
}
