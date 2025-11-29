import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIRE_TV_STICK = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.firetv_stick;',
  },
  _width: 78,
  _height: 34,
}

export function FireTvStick(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIRE_TV_STICK)} />
}
