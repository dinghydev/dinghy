import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DUCK = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.duck;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 105,
  _original_height: 73,
}

export function Duck(props: DiagramNodeProps) {
  return <Shape {...DUCK} {...props} _style={extendStyle(DUCK, props)} />
}
