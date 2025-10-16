import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BEAR_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.bear_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 101,
  _height: 66,
}

export function Bear2(props: DiagramNodeProps) {
  return <Shape {...BEAR_2} {...props} _style={extendStyle(BEAR_2, props)} />
}
