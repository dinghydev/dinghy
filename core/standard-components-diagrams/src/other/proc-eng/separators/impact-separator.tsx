import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMPACT_SEPARATOR = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.impact_separator;',
  _width: 80,
  _height: 120,
}

export function ImpactSeparator(props: DiagramNodeProps) {
  return <Shape {...IMPACT_SEPARATOR} {...props} />
}
