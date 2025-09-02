import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MIGRATION_SERVICE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.database_migration_service;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 72,
  _original_height: 81,
}

export function DatabaseMigrationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MIGRATION_SERVICE}
      {...props}
      _style={extendStyle(DATABASE_MIGRATION_SERVICE, props)}
    />
  )
}
