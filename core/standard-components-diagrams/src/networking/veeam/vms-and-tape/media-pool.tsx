import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA_POOL = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.media_pool;',
  },
  _width: 74.4,
  _height: 71.6,
}

export function MediaPool(props: DiagramNodeProps) {
  return (
    <Shape {...MEDIA_POOL} {...props} _style={extendStyle(MEDIA_POOL, props)} />
  )
}
