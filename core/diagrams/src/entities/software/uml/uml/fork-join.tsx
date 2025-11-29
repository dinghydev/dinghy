import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORK_JOIN = {
  _style: {
    entity: 'shape=line;html=1;strokeWidth=6;strokeColor=#ff0000;',
  },
  _width: 0,
  _height: 80,
}

export function ForkJoin(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FORK_JOIN)} />
}
