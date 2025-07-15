import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUNNEL = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.funnel;',
  _width: 80,
  _height: 140,
}

export function Funnel(props: DiagramNodeProps) {
  return <Shape {...FUNNEL} {...props} />
}
