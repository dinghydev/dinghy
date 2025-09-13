import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MUMMY = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.mummy;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 35,
  _height: 99,
}

export function Mummy(props: DiagramNodeProps) {
  return <Shape {...MUMMY} {...props} _style={extendStyle(MUMMY, props)} />
}
