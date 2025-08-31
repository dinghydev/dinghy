import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_FLOW = {
  _style: {
    entity: 'shape=rect;html=1;rounded=1;strokeWidth=2;whiteSpace=wrap;',
  },
  _width: 260,
  _height: 60,
}

export function ObjectFlow(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW}
      {...props}
      _style={extendStyle(OBJECT_FLOW, props)}
    />
  )
}
