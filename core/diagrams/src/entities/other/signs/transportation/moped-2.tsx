import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOPED_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.moped_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 54,
}

export function Moped2(props: NodeProps) {
  return <Shape {...MOPED_2} {...props} _style={extendStyle(MOPED_2, props)} />
}
