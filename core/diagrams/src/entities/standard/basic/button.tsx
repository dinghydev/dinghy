import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON = {
  _style: {
    entity:
      'labelPosition=center;verticalLabelPosition=middle;align=center;html=1;shape=mxgraph.basic.button;dx=10;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function Button(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON)} />
}
