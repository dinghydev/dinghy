import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESEQUENCER = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.resequencer;',
  _width: 150,
  _height: 90,
}

export function Resequencer(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESEQUENCER}
      {...props}
      _style={extendStyle(RESEQUENCER, props)}
    />
  )
}
