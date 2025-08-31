import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIPRION_4400 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.viprion_4400;',
  },
  _width: 168,
  _height: 120,
}

export function Viprion4400(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIPRION_4400}
      {...props}
      _style={extendStyle(VIPRION_4400, props)}
    />
  )
}
