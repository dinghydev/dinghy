import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUM = {
  _style: {
    entity:
      'shape=sumEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  },
  _width: 60,
  _height: 60,
}

export function Sum(props: DiagramNodeProps) {
  return <Shape {...SUM} {...props} _style={extendStyle(SUM, props)} />
}
