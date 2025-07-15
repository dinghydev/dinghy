import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BJT_PNP = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pnp_transistor_1;',
  _width: 95,
  _height: 100,
}

export function BjtPnp(props: DiagramNodeProps) {
  return <Shape {...BJT_PNP} {...props} />
}
