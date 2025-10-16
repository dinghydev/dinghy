import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_UP = {
  _style: {
    entity: 'shape=singleArrow;direction=north;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 100,
}

export function ArrowUp(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_UP} {...props} _style={extendStyle(ARROW_UP, props)} />
  )
}
