import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POINTED_OVAL = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.pointed_oval',
  },
  _original_width: 50,
  _original_height: 100,
}

export function PointedOval(props: DiagramNodeProps) {
  return (
    <Shape
      {...POINTED_OVAL}
      {...props}
      _style={extendStyle(POINTED_OVAL, props)}
    />
  )
}
