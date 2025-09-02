import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAIN_STATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.train_station;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 99,
}

export function TrainStation(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRAIN_STATION}
      {...props}
      _style={extendStyle(TRAIN_STATION, props)}
    />
  )
}
