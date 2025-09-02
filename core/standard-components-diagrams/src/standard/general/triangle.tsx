import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE = {
  _style: {
    entity: 'triangle;whiteSpace=wrap;html=1;',
  },
  _original_width: 60,
  _original_height: 80,
}

export function Triangle(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE} {...props} _style={extendStyle(TRIANGLE, props)} />
  )
}
