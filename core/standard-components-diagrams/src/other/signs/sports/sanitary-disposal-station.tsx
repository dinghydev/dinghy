import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SANITARY_DISPOSAL_STATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.sanitary_disposal_station;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 87,
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
