import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GO_SEE_PRODUCTION_SCHEDULING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.go_see_production_scheduling;pointerEvents=1;',
  },
  _width: 92,
  _height: 60,
}

export function GoSeeProductionScheduling(props: NodeProps) {
  return (
    <Shape
      {...GO_SEE_PRODUCTION_SCHEDULING}
      {...props}
      _style={extendStyle(GO_SEE_PRODUCTION_SCHEDULING, props)}
    />
  )
}
