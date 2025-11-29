import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RADICAL_RED = {
  _style: {
    entity: 'fillColor=#F1446F;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function RadicalRed(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RADICAL_RED)} />
}
