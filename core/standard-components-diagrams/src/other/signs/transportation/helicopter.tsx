import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HELICOPTER = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.helicopter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 100,
  _height: 63,
}

export function Helicopter(props: DiagramNodeProps) {
  return (
    <Shape {...HELICOPTER} {...props} _style={extendStyle(HELICOPTER, props)} />
  )
}
