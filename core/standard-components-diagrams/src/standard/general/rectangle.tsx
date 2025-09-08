import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RECTANGLE = {
  _style: {
    entity: 'rounded=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function Rectangle(props: DiagramNodeProps) {
  return (
    <Shape {...RECTANGLE} {...props} _style={extendStyle(RECTANGLE, props)} />
  )
}
