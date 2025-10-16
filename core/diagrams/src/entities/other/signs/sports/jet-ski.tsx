import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JET_SKI = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.jet_ski;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 86,
}

export function JetSki(props: DiagramNodeProps) {
  return <Shape {...JET_SKI} {...props} _style={extendStyle(JET_SKI, props)} />
}
