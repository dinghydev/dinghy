import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AND = {
  _style: {
    entity: 'shape=or;whiteSpace=wrap;html=1;',
  },
  _original_width: 60,
  _original_height: 80,
}

export function And(props: DiagramNodeProps) {
  return <Shape {...AND} {...props} _style={extendStyle(AND, props)} />
}
