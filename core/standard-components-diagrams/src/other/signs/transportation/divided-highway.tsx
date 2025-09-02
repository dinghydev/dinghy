import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIVIDED_HIGHWAY = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.divided_highway;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 84,
  _original_height: 98,
}

export function DividedHighway(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIVIDED_HIGHWAY}
      {...props}
      _style={extendStyle(DIVIDED_HIGHWAY, props)}
    />
  )
}
