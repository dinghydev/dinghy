import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE = {
  _style: {
    entity: 'shape=tape;whiteSpace=wrap;html=1;strokeWidth=2;size=0.19',
  },
  _width: 100,
  _height: 65,
}

export function Tape(props: NodeProps) {
  return <Shape {...TAPE} {...props} _style={extendStyle(TAPE, props)} />
}
