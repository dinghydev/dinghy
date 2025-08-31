import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_3X74_FLOOR_CLUSTER_CONTROLLER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.3x74_(floor)_cluster_controller;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 77,
  _height: 66,
}

export function Component3x74FloorClusterController(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3X74_FLOOR_CLUSTER_CONTROLLER}
      {...props}
      _style={extendStyle(COMPONENT_3X74_FLOOR_CLUSTER_CONTROLLER, props)}
    />
  )
}
