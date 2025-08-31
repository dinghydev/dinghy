import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHADOW = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.shadow;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 85.5,
  _height: 91.5,
}

export function Shadow(props: DiagramNodeProps) {
  return <Shape {...SHADOW} {...props} _style={extendStyle(SHADOW, props)} />
}
