import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PELLETIZING_DISC = {
  _style:
    'shape=mxgraph.pid.shaping_machines.pelletizing_disc;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 60,
}

export function PelletizingDisc(props: DiagramNodeProps) {
  return <Shape {...PELLETIZING_DISC} {...props} />
}
