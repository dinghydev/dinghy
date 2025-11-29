import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROCESS = {
  _style: {
    entity: 'shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;',
  },
  _width: 120,
  _height: 60,
}

export function Process(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROCESS)} />
}
