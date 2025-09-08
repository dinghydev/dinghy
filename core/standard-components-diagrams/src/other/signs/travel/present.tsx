import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRESENT = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.present;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 76,
  _original_height: 98,
}

export function Present(props: DiagramNodeProps) {
  return <Shape {...PRESENT} {...props} _style={extendStyle(PRESENT, props)} />
}
