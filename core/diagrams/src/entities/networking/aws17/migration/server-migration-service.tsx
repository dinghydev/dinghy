import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVER_MIGRATION_SERVICE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.server_migration_service;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function ServerMigrationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_MIGRATION_SERVICE}
      {...props}
      _style={extendStyle(SERVER_MIGRATION_SERVICE, props)}
    />
  )
}
