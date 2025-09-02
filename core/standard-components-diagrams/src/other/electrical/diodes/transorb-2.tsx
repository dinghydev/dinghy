import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSORB_2 = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.transorb_2;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Transorb2(props: DiagramNodeProps) {
  return (
    <Shape {...TRANSORB_2} {...props} _style={extendStyle(TRANSORB_2, props)} />
  )
}
