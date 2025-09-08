import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEADPHONES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.headphones;pointerEvents=1;',
  },
  _original_width: 66,
  _original_height: 56,
}

export function Headphones(props: DiagramNodeProps) {
  return (
    <Shape {...HEADPHONES} {...props} _style={extendStyle(HEADPHONES, props)} />
  )
}
