import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_DOWN = {
  _style: {
    entity: 'shape=singleArrow;direction=south;whiteSpace=wrap;html=1;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function ArrowDown(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_DOWN} {...props} _style={extendStyle(ARROW_DOWN, props)} />
  )
}
