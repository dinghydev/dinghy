import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BJT_PNP_2 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pnp_transistor_5;',
  _width: 64,
  _height: 100,
}

export function BjtPnp2(props: DiagramNodeProps) {
  return <Shape {...BJT_PNP_2} {...props} />
}
