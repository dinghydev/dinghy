import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TELEPHONE_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.telephone_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 74,
  _height: 101,
}

export function Telephone3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TELEPHONE_3)} />
}
