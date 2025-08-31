import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNOWMOBILE = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.snowmobile;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 80,
}

export function Snowmobile(props: DiagramNodeProps) {
  return (
    <Shape {...SNOWMOBILE} {...props} _style={extendStyle(SNOWMOBILE, props)} />
  )
}
