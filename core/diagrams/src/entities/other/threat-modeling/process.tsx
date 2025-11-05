import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROCESS = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Process(props: NodeProps) {
  return <Shape {...PROCESS} {...props} _style={extendStyle(PROCESS, props)} />
}
