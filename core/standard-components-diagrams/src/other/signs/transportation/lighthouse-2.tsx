import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIGHTHOUSE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.lighthouse_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 55,
  _original_height: 98,
}

export function Lighthouse2(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIGHTHOUSE_2}
      {...props}
      _style={extendStyle(LIGHTHOUSE_2, props)}
    />
  )
}
