import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AMPLIFIER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.amplifier;',
  _width: 90,
  _height: 100,
}

export function Amplifier(props: DiagramNodeProps) {
  return <Shape {...AMPLIFIER} {...props} />
}
