import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TELEPHONE_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.telephone_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 71,
  _height: 99,
}

export function Telephone4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TELEPHONE_4)} />
}
