import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DELIVERY_CONTROLLER = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.delivery_controller;',
  },
  _width: 60,
  _height: 60,
}

export function DeliveryController(props: DiagramNodeProps) {
  return (
    <Shape
      {...DELIVERY_CONTROLLER}
      {...props}
      _style={extendStyle(DELIVERY_CONTROLLER, props)}
    />
  )
}
