import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIMARY_STORAGE_INTEGRATION = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.primary_storage_integration;',
  _width: 44.8,
  _height: 44.8,
}

export function PrimaryStorageIntegration(props: DiagramNodeProps) {
  return <Shape {...PRIMARY_STORAGE_INTEGRATION} {...props} />
}
