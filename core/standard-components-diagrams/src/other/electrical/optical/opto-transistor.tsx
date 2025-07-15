import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPTO_TRANSISTOR = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.opto-transistor;',
  _width: 100,
  _height: 110,
}

export function OptoTransistor(props: DiagramNodeProps) {
  return <Shape {...OPTO_TRANSISTOR} {...props} />
}
