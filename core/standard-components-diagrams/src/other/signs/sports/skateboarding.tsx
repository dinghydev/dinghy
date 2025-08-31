import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SKATEBOARDING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.skateboarding;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 66,
  _height: 98,
}

export function Skateboarding(props: DiagramNodeProps) {
  return (
    <Shape
      {...SKATEBOARDING}
      {...props}
      _style={extendStyle(SKATEBOARDING, props)}
    />
  )
}
