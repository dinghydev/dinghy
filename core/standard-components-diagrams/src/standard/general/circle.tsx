import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCLE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Circle(props: DiagramNodeProps) {
  return <Shape {...CIRCLE} {...props} _style={extendStyle(CIRCLE, props)} />
}
