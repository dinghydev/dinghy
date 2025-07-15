import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDUCTOR_AIR_CORE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.inductor_3;',
  _width: 100,
  _height: 8,
}

export function InductorAirCore(props: DiagramNodeProps) {
  return <Shape {...INDUCTOR_AIR_CORE} {...props} />
}
