import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEER_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.deer_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function Deer2(props: DiagramNodeProps) {
  return <Shape {...DEER_2} {...props} _style={extendStyle(DEER_2, props)} />
}
