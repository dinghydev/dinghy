import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TELECOMMUTER_HOUSE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.buildings.telecommuter_house;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 104,
  _original_height: 88,
}

export function TelecommuterHouse(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELECOMMUTER_HOUSE}
      {...props}
      _style={extendStyle(TELECOMMUTER_HOUSE, props)}
    />
  )
}
