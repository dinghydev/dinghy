import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAIN_STATION = {
  _style:
    'shape=mxgraph.signs.transportation.train_station;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 99,
}

export function TrainStation(props: DiagramNodeProps) {
  return <Shape {...TRAIN_STATION} {...props} />
}
