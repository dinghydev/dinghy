import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_3174_DESKTOP_CLUSTER_CONTROLLER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.3174_(desktop)_cluster_controller;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 77,
  _original_height: 32,
}

export function Component3174DesktopClusterController(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3174_DESKTOP_CLUSTER_CONTROLLER}
      {...props}
      _style={extendStyle(COMPONENT_3174_DESKTOP_CLUSTER_CONTROLLER, props)}
    />
  )
}
