import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIFELINE = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 0,
  _original_height: 150,
}

export function Lifeline(props: DiagramNodeProps) {
  return (
    <Shape {...LIFELINE} {...props} _style={extendStyle(LIFELINE, props)} />
  )
}
