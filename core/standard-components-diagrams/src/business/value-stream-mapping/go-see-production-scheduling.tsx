import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GO_SEE_PRODUCTION_SCHEDULING = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.go_see_production_scheduling;pointerEvents=1;',
  _width: 92,
  _height: 60,
}

export function GoSeeProductionScheduling(props: DiagramNodeProps) {
  return <Shape {...GO_SEE_PRODUCTION_SCHEDULING} {...props} />
}
