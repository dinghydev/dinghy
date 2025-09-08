import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BJT_NPN_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.npn_transistor_5;',
  },
  _original_width: 64,
  _original_height: 100,
}

export function BjtNpn2(props: DiagramNodeProps) {
  return (
    <Shape {...BJT_NPN_2} {...props} _style={extendStyle(BJT_NPN_2, props)} />
  )
}
