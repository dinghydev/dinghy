import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDFARM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.windfarm;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Windfarm(props: DiagramNodeProps) {
  return (
    <Shape {...WINDFARM} {...props} _style={extendStyle(WINDFARM, props)} />
  )
}
