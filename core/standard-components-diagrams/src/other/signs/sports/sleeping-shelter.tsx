import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLEEPING_SHELTER = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.sleeping_shelter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 90,
}

export function SleepingShelter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLEEPING_SHELTER}
      {...props}
      _style={extendStyle(SLEEPING_SHELTER, props)}
    />
  )
}
