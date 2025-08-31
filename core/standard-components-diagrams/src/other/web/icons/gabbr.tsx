import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GABBR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.gabbr;fillColor=#FBAC39;gradientColor=#EA2B0E',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Gabbr(props: DiagramNodeProps) {
  return <Shape {...GABBR} {...props} _style={extendStyle(GABBR, props)} />
}
