import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INFORMATION_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.information_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 59,
  _original_height: 98,
}

export function Information2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION_2}
      {...props}
      _style={extendStyle(INFORMATION_2, props)}
    />
  )
}
