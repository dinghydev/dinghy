import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIMPLE_STATE = {
  _style: {
    entity: 'shape=rect;rounded=1;html=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 100,
  _original_height: 40,
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
