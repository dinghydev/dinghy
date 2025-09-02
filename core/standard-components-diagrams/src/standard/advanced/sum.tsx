import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUM = {
  _style: {
    entity:
      'shape=sumEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Sum(props: DiagramNodeProps) {
  return <Shape {...SUM} {...props} _style={extendStyle(SUM, props)} />
}
