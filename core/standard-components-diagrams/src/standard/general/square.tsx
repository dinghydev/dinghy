import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQUARE = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Square(props: DiagramNodeProps) {
  return <Shape {...SQUARE} {...props} _style={extendStyle(SQUARE, props)} />
}
