import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOPED_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.moped_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 57,
}

export function Moped1(props: DiagramNodeProps) {
  return <Shape {...MOPED_1} {...props} _style={extendStyle(MOPED_1, props)} />
}
