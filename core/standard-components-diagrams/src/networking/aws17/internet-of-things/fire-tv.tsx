import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIRE_TV = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.fire_tv;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 75,
  _height: 55.5,
}

export function FireTv(props: DiagramNodeProps) {
  return <Shape {...FIRE_TV} {...props} _style={extendStyle(FIRE_TV, props)} />
}
