import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROWBOAT = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.rowboat;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 81,
}

export function Rowboat(props: DiagramNodeProps) {
  return <Shape {...ROWBOAT} {...props} _style={extendStyle(ROWBOAT, props)} />
}
