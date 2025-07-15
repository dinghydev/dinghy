import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTRIFUGE_SEPARATOR_DISC = {
  _style:
    'shape=mxgraph.pid.centrifuges.centrifuge_(separator_disc);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 110,
}

export function CentrifugeSeparatorDisc(props: DiagramNodeProps) {
  return <Shape {...CENTRIFUGE_SEPARATOR_DISC} {...props} />
}
