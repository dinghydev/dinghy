import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_RIGHT = {
  _style: {
    entity: 'shape=singleArrow;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 60,
}

export function ArrowRight(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_RIGHT}
      {...props}
      _style={extendStyle(ARROW_RIGHT, props)}
    />
  )
}
