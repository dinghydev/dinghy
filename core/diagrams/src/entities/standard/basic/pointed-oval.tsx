import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POINTED_OVAL = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.pointed_oval',
  },
  _width: 50,
  _height: 100,
}

export function PointedOval(props: NodeProps) {
  return (
    <Shape
      {...POINTED_OVAL}
      {...props}
      _style={extendStyle(POINTED_OVAL, props)}
    />
  )
}
