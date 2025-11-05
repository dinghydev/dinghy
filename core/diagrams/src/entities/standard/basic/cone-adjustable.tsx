import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONE_ADJUSTABLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.cone2;dx=0.5;dy=0.9;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ConeAdjustable(props: NodeProps) {
  return (
    <Shape
      {...CONE_ADJUSTABLE}
      {...props}
      _style={extendStyle(CONE_ADJUSTABLE, props)}
    />
  )
}
