import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTE_SWITCH_PROCESSOR = {
  _style:
    'shape=mxgraph.cisco.misc.route_switch_processor;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 64,
  _height: 86,
}

export function RouteSwitchProcessor(props: DiagramNodeProps) {
  return <Shape {...ROUTE_SWITCH_PROCESSOR} {...props} />
}
