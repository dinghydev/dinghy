import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.tape;pointerEvents=1',
  },
  _original_width: 30,
  _original_height: 12,
}

export function Tape(props: DiagramNodeProps) {
  return <Shape {...TAPE} {...props} _style={extendStyle(TAPE, props)} />
}
