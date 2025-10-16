import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROPERTY = {
  _style: {
    entity:
      'align=right;verticalAlign=top;spacingRight=2;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 50,
}

export function Property(props: DiagramNodeProps) {
  return (
    <Shape {...PROPERTY} {...props} _style={extendStyle(PROPERTY, props)} />
  )
}
