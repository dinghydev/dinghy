import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_PROCESS = {
  _style: {
    entity:
      'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;perimeter=ellipsePerimeter;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function DataProcess(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_PROCESS}
      {...props}
      _style={extendStyle(DATA_PROCESS, props)}
    />
  )
}
