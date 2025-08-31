import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOWNSTAIRS = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.downstairs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 83,
}

export function Downstairs(props: DiagramNodeProps) {
  return (
    <Shape {...DOWNSTAIRS} {...props} _style={extendStyle(DOWNSTAIRS, props)} />
  )
}
