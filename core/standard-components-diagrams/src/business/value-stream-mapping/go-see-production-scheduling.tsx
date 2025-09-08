import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GO_SEE_PRODUCTION_SCHEDULING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.go_see_production_scheduling;pointerEvents=1;',
  },
  _original_width: 92,
  _original_height: 60,
}

export function GoSeeProductionScheduling(props: DiagramNodeProps) {
  return (
    <Shape
      {...GO_SEE_PRODUCTION_SCHEDULING}
      {...props}
      _style={extendStyle(GO_SEE_PRODUCTION_SCHEDULING, props)}
    />
  )
}
