import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PMOS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pmos;pointerEvents=1;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function Pmos2(props: DiagramNodeProps) {
  return <Shape {...PMOS_2} {...props} _style={extendStyle(PMOS_2, props)} />
}
