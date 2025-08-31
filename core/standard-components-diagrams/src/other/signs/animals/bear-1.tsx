import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEAR_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.bear_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 62,
}

export function Bear1(props: DiagramNodeProps) {
  return <Shape {...BEAR_1} {...props} _style={extendStyle(BEAR_1, props)} />
}
