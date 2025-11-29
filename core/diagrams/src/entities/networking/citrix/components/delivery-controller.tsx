import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DELIVERY_CONTROLLER = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.delivery_controller;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DeliveryController(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DELIVERY_CONTROLLER)} />
}
