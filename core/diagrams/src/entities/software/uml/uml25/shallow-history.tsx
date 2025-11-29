import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHALLOW_HISTORY = {
  _style: {
    entity: 'ellipse;html=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function ShallowHistory(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHALLOW_HISTORY)} />
}
