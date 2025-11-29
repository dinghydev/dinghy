import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTRY_POINT = {
  _style: {
    entity: 'ellipse;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function EntryPoint(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ENTRY_POINT)} />
}
