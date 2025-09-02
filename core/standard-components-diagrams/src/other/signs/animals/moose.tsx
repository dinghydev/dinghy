import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOOSE = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.moose;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 65,
}

export function Moose(props: DiagramNodeProps) {
  return <Shape {...MOOSE} {...props} _style={extendStyle(MOOSE, props)} />
}
