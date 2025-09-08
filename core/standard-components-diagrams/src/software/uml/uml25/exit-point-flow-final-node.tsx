import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXIT_POINT_FLOW_FINAL_NODE = {
  _style: {
    entity:
      'shape=sumEllipse;perimeter=ellipsePerimeter;html=1;backgroundOutline=1;',
  },
  _original_width: 30,
  _original_height: 30,
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
