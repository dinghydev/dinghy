import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const READONLY_INPUT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#CED4DA;strokeWidth=1;fillColor=#E9ECEF;fontColor=#505050;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;fontSize=14;',
  },
  _original_width: 800,
  _original_height: 40,
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
