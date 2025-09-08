import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIRE_TV_STICK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.fire_tv_stick;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 85.5,
  _original_height: 33,
}

export function FireTvStick(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIRE_TV_STICK}
      {...props}
      _style={extendStyle(FIRE_TV_STICK, props)}
    />
  )
}
