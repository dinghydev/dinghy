import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNISEX = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.unisex;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 93,
}

export function Unisex(props: DiagramNodeProps) {
  return <Shape {...UNISEX} {...props} _style={extendStyle(UNISEX, props)} />
}
