import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRODUCTION_CONTROL = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.schedule;whiteSpace=wrap;align=center;',
  },
  _width: 100,
  _height: 70,
}

export function ProductionControl(props: NodeProps) {
  return (
    <Shape
      {...PRODUCTION_CONTROL}
      {...props}
      _style={extendStyle(PRODUCTION_CONTROL, props)}
    />
  )
}
