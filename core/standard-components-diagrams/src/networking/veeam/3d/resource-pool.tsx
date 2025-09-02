import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESOURCE_POOL = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.resource_pool;',
  },
  _original_width: 56,
  _original_height: 32,
}

export function ResourcePool(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_POOL}
      {...props}
      _style={extendStyle(RESOURCE_POOL, props)}
    />
  )
}
