import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_FLOW_2 = {
  _style: 'shape=rect;html=1;strokeWidth=2;whiteSpace=wrap;',
  _width: 1,
  _height: 60,
}

export function ObjectFlow2(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_2}
      {...props}
      _style={extendStyle(OBJECT_FLOW_2, props)}
    />
  )
}
