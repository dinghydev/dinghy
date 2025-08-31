import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLE_CLASSIC = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.apple_classic',
  },
  _width: 62.400000000000006,
  _height: 76.2,
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
