import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MUMMY = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.mummy;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 35,
  _original_height: 99,
}

export function Mummy(props: DiagramNodeProps) {
  return <Shape {...MUMMY} {...props} _style={extendStyle(MUMMY, props)} />
}
