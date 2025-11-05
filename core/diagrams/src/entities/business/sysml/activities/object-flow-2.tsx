import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT_FLOW_2 = {
  _style: {
    entity: 'shape=rect;html=1;strokeWidth=2;whiteSpace=wrap;',
  },
  _width: 1,
  _height: 60,
}

export function ObjectFlow2(props: NodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_2}
      {...props}
      _style={extendStyle(OBJECT_FLOW_2, props)}
    />
  )
}
