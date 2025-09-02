import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOVERNMENT_BUILDING = {
  _style: {
    entity:
      'shape=mxgraph.cisco.buildings.government_building;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 107,
  _original_height: 78,
}

export function GovernmentBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...GOVERNMENT_BUILDING}
      {...props}
      _style={extendStyle(GOVERNMENT_BUILDING, props)}
    />
  )
}
