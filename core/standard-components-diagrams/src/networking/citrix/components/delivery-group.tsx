import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DELIVERY_GROUP = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.delivery_group;',
  _width: 50,
  _height: 50,
}

export function DeliveryGroup(props: DiagramNodeProps) {
  return <Shape {...DELIVERY_GROUP} {...props} />
}
