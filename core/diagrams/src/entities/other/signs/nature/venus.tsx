import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VENUS = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.venus;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 65,
  _height: 98,
}

export function Venus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VENUS)} />
}
