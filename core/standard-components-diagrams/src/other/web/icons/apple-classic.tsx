import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLE_CLASSIC = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.apple_classic;fillColor=#66E8F3;gradientColor=#1C7CBA',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function AppleClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLE_CLASSIC}
      {...props}
      _style={extendStyle(APPLE_CLASSIC, props)}
    />
  )
}
