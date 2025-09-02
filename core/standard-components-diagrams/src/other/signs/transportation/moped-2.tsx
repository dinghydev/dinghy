import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOPED_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.moped_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 54,
}

export function Moped2(props: DiagramNodeProps) {
  return <Shape {...MOPED_2} {...props} _style={extendStyle(MOPED_2, props)} />
}
