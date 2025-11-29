import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINATE = {
  _style: {
    entity: 'shape=umlDestroy;html=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Terminate(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TERMINATE)} />
}
