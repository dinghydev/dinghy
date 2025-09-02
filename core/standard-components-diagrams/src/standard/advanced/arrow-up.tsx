import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_UP = {
  _style: {
    entity: 'shape=singleArrow;direction=north;whiteSpace=wrap;html=1;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function ArrowUp(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_UP} {...props} _style={extendStyle(ARROW_UP, props)} />
  )
}
