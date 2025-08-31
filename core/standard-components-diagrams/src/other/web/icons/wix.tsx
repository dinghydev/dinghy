import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIX = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.wix;fillColor=#8AE3F2;gradientColor=#2451B0',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Wix(props: DiagramNodeProps) {
  return <Shape {...WIX} {...props} _style={extendStyle(WIX, props)} />
}
