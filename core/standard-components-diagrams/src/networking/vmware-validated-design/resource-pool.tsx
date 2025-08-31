import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESOURCE_POOL = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.resource_pool;',
  _width: 60,
  _height: 60,
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
