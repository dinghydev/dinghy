import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_LEFT = {
  _style: {
    entity: 'shape=singleArrow;direction=west;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 60,
}

export function ArrowLeft(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_LEFT} {...props} _style={extendStyle(ARROW_LEFT, props)} />
  )
}
