import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_MIGRATION_SERVICE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.server_migration_service;fillColor=#5294CF;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function ServerMigrationService(props: DiagramNodeProps) {
  return <Shape {...SERVER_MIGRATION_SERVICE} {...props} />
}
