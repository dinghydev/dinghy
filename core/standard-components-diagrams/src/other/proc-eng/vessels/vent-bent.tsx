import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VENT_BENT = {
  _style:
    'shape=mxgraph.pid.vessels.vent_(bent);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 10,
  _height: 20,
}

export function VentBent(props: DiagramNodeProps) {
  return <Shape {...VENT_BENT} {...props} />
}
