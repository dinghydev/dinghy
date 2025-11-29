import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.message;pointerEvents=1;',
  },
  _width: 50,
  _height: 37.5,
}

export function Message(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE)} />
}
