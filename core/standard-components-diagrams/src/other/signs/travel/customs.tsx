import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CUSTOMS = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.customs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 84,
}

export function Customs(props: DiagramNodeProps) {
  return <Shape {...CUSTOMS} {...props} _style={extendStyle(CUSTOMS, props)} />
}
