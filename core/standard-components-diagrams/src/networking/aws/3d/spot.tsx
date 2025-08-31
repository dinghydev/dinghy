import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPOT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.spot2;fillColor=#F4B934;strokeColor=none;aspect=fixed;',
  },
  _width: 62,
  _height: 36,
}

export function Spot(props: DiagramNodeProps) {
  return <Shape {...SPOT} {...props} _style={extendStyle(SPOT, props)} />
}
