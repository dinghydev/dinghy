import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREPASS_1200 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.firepass_1200;',
  _width: 168,
  _height: 20,
}

export function Firepass1200(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIREPASS_1200}
      {...props}
      _style={extendStyle(FIREPASS_1200, props)}
    />
  )
}
