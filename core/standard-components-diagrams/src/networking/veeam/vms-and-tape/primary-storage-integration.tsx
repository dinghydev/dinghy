import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIMARY_STORAGE_INTEGRATION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.primary_storage_integration;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function PrimaryStorageIntegration(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIMARY_STORAGE_INTEGRATION}
      {...props}
      _style={extendStyle(PRIMARY_STORAGE_INTEGRATION, props)}
    />
  )
}
