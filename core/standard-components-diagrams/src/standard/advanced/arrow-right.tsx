import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_RIGHT = {
  _style: {
    entity: 'shape=singleArrow;whiteSpace=wrap;html=1;',
  },
  _original_width: 100,
  _original_height: 60,
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
