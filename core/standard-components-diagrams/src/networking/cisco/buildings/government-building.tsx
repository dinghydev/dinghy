import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOVERNMENT_BUILDING = {
  _style:
    'shape=mxgraph.cisco.buildings.government_building;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 107,
  _height: 78,
}

export function GovernmentBuilding(props: DiagramNodeProps) {
  return <Shape {...GOVERNMENT_BUILDING} {...props} />
}
