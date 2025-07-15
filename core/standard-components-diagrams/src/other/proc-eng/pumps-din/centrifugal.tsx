import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTRIFUGAL = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.centrifugal;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function Centrifugal(props: DiagramNodeProps) {
  return <Shape {...CENTRIFUGAL} {...props} />
}
