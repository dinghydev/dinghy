import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTER_IN_BUILDING = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.router_in_building;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 91,
  _height: 138,
}

export function RouterInBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTER_IN_BUILDING}
      {...props}
      _style={extendStyle(ROUTER_IN_BUILDING, props)}
    />
  )
}
