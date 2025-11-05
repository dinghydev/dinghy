import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLE_CLASSIC = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.apple_classic',
  },
  _original_width: 62.400000000000006,
  _original_height: 76.2,
}

export function AppleClassic(props: NodeProps) {
  return (
    <Shape
      {...APPLE_CLASSIC}
      {...props}
      _style={extendStyle(APPLE_CLASSIC, props)}
    />
  )
}
