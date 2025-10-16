import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESOURCE_POOL = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.resource_pool;',
  },
  _width: 56,
  _height: 32,
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
