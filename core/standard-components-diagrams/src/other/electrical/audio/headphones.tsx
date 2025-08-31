import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEADPHONES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.headphones;pointerEvents=1;',
  },
  _width: 66,
  _height: 56,
}

export function Headphones(props: DiagramNodeProps) {
  return (
    <Shape {...HEADPHONES} {...props} _style={extendStyle(HEADPHONES, props)} />
  )
}
