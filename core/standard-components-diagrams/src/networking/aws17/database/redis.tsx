import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REDIS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.redis;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function Redis(props: DiagramNodeProps) {
  return <Shape {...REDIS} {...props} _style={extendStyle(REDIS, props)} />
}
