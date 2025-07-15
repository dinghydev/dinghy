import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOOP_ANTENNA = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.loop_antenna;',
  _width: 64.8,
  _height: 69.78,
}

export function LoopAntenna(props: DiagramNodeProps) {
  return <Shape {...LOOP_ANTENNA} {...props} />
}
