import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOOSE = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.moose;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 65,
}

export function Moose(props: DiagramNodeProps) {
  return <Shape {...MOOSE} {...props} _style={extendStyle(MOOSE, props)} />
}
