import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXIT_POINT_FLOW_FINAL_NODE = {
  _style:
    'shape=sumEllipse;perimeter=ellipsePerimeter;html=1;backgroundOutline=1;',
  _width: 30,
  _height: 30,
}

export function ExitPointFlowFinalNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXIT_POINT_FLOW_FINAL_NODE}
      {...props}
      _style={extendStyle(EXIT_POINT_FLOW_FINAL_NODE, props)}
    />
  )
}
