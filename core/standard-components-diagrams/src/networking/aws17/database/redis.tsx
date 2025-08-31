import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REDIS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.redis;fillColor=#2E73B8;gradientColor=none;',
  },
  _width: 60,
  _height: 63,
}

export function Redis(props: DiagramNodeProps) {
  return <Shape {...REDIS} {...props} _style={extendStyle(REDIS, props)} />
}
