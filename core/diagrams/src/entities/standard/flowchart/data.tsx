import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA = {
  _style: {
    entity:
      'shape=parallelogram;html=1;strokeWidth=2;perimeter=parallelogramPerimeter;whiteSpace=wrap;rounded=1;arcSize=12;size=0.23;',
  },
  _width: 100,
  _height: 60,
}

export function Data(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA)} />
}
