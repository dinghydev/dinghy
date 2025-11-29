import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEAGULL = {
  _style: {
    entity: 'fillColor=#1EB5BD;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Seagull(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEAGULL)} />
}
