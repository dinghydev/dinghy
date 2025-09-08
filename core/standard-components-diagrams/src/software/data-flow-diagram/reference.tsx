import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REFERENCE = {
  _style: {
    entity:
      'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;perimeter=ellipsePerimeter;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Reference(props: DiagramNodeProps) {
  return (
    <Shape {...REFERENCE} {...props} _style={extendStyle(REFERENCE, props)} />
  )
}
