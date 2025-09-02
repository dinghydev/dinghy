import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BJT_PNP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pnp_transistor_1;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function BjtPnp(props: DiagramNodeProps) {
  return <Shape {...BJT_PNP} {...props} _style={extendStyle(BJT_PNP, props)} />
}
