import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPANSION = {
  _style: {
    entity:
      'html=1;dashed=1;rounded=1;absoluteArcSize=1;arcSize=20;verticalAlign=top;align=left;spacingTop=20;spacingLeft=20;whiteSpace=wrap;',
  },
  _original_width: 300,
  _original_height: 300,
}

export function Expansion(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXPANSION)} />
}
