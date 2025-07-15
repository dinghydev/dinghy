import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MICROPHONE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.microphone_1;',
  _width: 70,
  _height: 70,
}

export function Microphone(props: DiagramNodeProps) {
  return <Shape {...MICROPHONE} {...props} />
}
