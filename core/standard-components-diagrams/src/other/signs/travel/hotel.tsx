import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOTEL = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.hotel;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 60,
}

export function Hotel(props: DiagramNodeProps) {
  return <Shape {...HOTEL} {...props} _style={extendStyle(HOTEL, props)} />
}
