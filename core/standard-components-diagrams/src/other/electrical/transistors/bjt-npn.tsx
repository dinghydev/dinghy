import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BJT_NPN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.npn_transistor_1;',
  },
  _width: 95,
  _height: 100,
}

export function BjtNpn(props: DiagramNodeProps) {
  return <Shape {...BJT_NPN} {...props} _style={extendStyle(BJT_NPN, props)} />
}
