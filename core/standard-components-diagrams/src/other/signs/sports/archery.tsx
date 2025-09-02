import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARCHERY = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.archery;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 72,
  _original_height: 98,
}

export function Archery(props: DiagramNodeProps) {
  return <Shape {...ARCHERY} {...props} _style={extendStyle(ARCHERY, props)} />
}
