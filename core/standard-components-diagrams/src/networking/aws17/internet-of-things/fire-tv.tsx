import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIRE_TV = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.fire_tv;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 75,
  _original_height: 55.5,
}

export function FireTv(props: DiagramNodeProps) {
  return <Shape {...FIRE_TV} {...props} _style={extendStyle(FIRE_TV, props)} />
}
