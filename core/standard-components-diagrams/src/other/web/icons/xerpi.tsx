import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XERPI = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.xerpi;fillColor=#7F719B;gradientColor=#32264B',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Xerpi(props: DiagramNodeProps) {
  return <Shape {...XERPI} {...props} _style={extendStyle(XERPI, props)} />
}
