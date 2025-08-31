import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ULTRASOUND = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.ultrasound;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 90,
  _height: 99,
}

export function Ultrasound(props: DiagramNodeProps) {
  return (
    <Shape {...ULTRASOUND} {...props} _style={extendStyle(ULTRASOUND, props)} />
  )
}
