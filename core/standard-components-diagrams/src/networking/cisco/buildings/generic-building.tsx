import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERIC_BUILDING = {
  _style: {
    entity:
      'shape=mxgraph.cisco.buildings.generic_building;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 136,
}

export function GenericBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_BUILDING}
      {...props}
      _style={extendStyle(GENERIC_BUILDING, props)}
    />
  )
}
