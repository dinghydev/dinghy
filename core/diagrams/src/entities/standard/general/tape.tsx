import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE = {
  _style: {
    entity: 'shape=tape;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 100,
}

export function Tape(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAPE)} />
}
