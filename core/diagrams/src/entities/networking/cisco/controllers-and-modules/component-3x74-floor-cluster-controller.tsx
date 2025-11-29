import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3X74_FLOOR_CLUSTER_CONTROLLER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.3x74_(floor)_cluster_controller;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 77,
  _original_height: 66,
}

export function Component3x74FloorClusterController(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, COMPONENT_3X74_FLOOR_CLUSTER_CONTROLLER)}
    />
  )
}
