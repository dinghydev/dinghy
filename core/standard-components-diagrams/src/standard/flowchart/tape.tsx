import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE = {
  _style: {
    entity: 'shape=tape;whiteSpace=wrap;html=1;strokeWidth=2;size=0.19',
  },
  _original_width: 100,
  _original_height: 65,
}

export function Tape(props: DiagramNodeProps) {
  return <Shape {...TAPE} {...props} _style={extendStyle(TAPE, props)} />
}
