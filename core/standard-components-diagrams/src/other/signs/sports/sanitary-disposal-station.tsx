import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SANITARY_DISPOSAL_STATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.sanitary_disposal_station;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 87,
}

export function SanitaryDisposalStation(props: DiagramNodeProps) {
  return (
    <Shape
      {...SANITARY_DISPOSAL_STATION}
      {...props}
      _style={extendStyle(SANITARY_DISPOSAL_STATION, props)}
    />
  )
}
