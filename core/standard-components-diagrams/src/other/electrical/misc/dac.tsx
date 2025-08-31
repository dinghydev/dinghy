import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DAC = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.dac;',
  _width: 70,
  _height: 46,
}

export function Dac(props: DiagramNodeProps) {
  return <Shape {...DAC} {...props} _style={extendStyle(DAC, props)} />
}
