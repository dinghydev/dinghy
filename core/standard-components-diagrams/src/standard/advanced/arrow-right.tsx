import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_RIGHT = {
  _style: 'shape=singleArrow;whiteSpace=wrap;html=1;',
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
