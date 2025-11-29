import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OVER_THE_AIR_UPDATE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_over_the_air_update;',
  },
  _original_width: 78,
  _original_height: 63,
}

export function OverTheAirUpdate(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OVER_THE_AIR_UPDATE)} />
}
