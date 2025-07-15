import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MICROPHONE_2 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.microphone_2;',
  _width: 42,
  _height: 70,
}

export function Microphone2(props: DiagramNodeProps) {
  return <Shape {...MICROPHONE_2} {...props} />
}
