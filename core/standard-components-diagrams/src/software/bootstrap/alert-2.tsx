import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALERT_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#D6D8DB;strokeWidth=1;fillColor=#E2E3E5;fontColor=#383D41;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  },
  _original_width: 800,
  _original_height: 40,
}

export function Alert2(props: DiagramNodeProps) {
  return <Shape {...ALERT_2} {...props} _style={extendStyle(ALERT_2, props)} />
}
