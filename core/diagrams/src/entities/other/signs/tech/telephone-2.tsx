import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TELEPHONE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.telephone_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 36,
  _height: 98,
}

export function Telephone2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TELEPHONE_2)} />
}
