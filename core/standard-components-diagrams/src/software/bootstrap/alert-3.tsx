import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALERT_3 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#E0F0D6;fontColor=#59B958;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  },
  _original_width: 800,
  _original_height: 40,
}

export function Alert3(props: DiagramNodeProps) {
  return <Shape {...ALERT_3} {...props} _style={extendStyle(ALERT_3, props)} />
}
