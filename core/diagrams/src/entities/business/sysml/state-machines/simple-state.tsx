import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SIMPLE_STATE = {
  _style: {
    entity: 'shape=rect;rounded=1;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 100,
  _height: 40,
}

export function SimpleState(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIMPLE_STATE}
      {...props}
      _style={extendStyle(SIMPLE_STATE, props)}
    />
  )
}
