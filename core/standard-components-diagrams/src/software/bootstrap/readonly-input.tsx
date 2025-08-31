import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const READONLY_INPUT = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#CED4DA;strokeWidth=1;fillColor=#E9ECEF;fontColor=#505050;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;fontSize=14;',
  _width: 800,
  _height: 40,
}

export function ReadonlyInput(props: DiagramNodeProps) {
  return (
    <Shape
      {...READONLY_INPUT}
      {...props}
      _style={extendStyle(READONLY_INPUT, props)}
    />
  )
}
