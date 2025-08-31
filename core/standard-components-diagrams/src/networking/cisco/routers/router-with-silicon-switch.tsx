import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTER_WITH_SILICON_SWITCH = {
  _style:
    'shape=mxgraph.cisco.routers.router_with_silicon_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 72,
  _height: 48,
}

export function RouterWithSiliconSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTER_WITH_SILICON_SWITCH}
      {...props}
      _style={extendStyle(ROUTER_WITH_SILICON_SWITCH, props)}
    />
  )
}
