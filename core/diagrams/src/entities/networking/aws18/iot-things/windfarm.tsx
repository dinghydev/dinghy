import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDFARM = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.windfarm;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Windfarm(props: DiagramNodeProps) {
  return (
    <Shape {...WINDFARM} {...props} _style={extendStyle(WINDFARM, props)} />
  )
}
