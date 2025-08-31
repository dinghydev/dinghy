import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDFARM = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.windfarm;',
  },
  _width: 60,
  _height: 60,
}

export function Windfarm(props: DiagramNodeProps) {
  return (
    <Shape {...WINDFARM} {...props} _style={extendStyle(WINDFARM, props)} />
  )
}
