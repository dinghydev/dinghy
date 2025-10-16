import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ULTRASOUND = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.ultrasound;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 90,
  _original_height: 99,
}

export function Ultrasound(props: DiagramNodeProps) {
  return (
    <Shape {...ULTRASOUND} {...props} _style={extendStyle(ULTRASOUND, props)} />
  )
}
