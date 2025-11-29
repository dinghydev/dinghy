import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIRE_TV_STICK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.fire_tv_stick;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 85.5,
  _height: 33,
}

export function FireTvStick(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIRE_TV_STICK)} />
}
