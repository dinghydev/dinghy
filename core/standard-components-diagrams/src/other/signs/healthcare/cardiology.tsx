import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARDIOLOGY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.cardiology;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 97,
}

export function Cardiology(props: DiagramNodeProps) {
  return (
    <Shape {...CARDIOLOGY} {...props} _style={extendStyle(CARDIOLOGY, props)} />
  )
}
