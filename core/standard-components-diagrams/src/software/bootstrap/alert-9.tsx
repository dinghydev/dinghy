import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALERT_9 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#E0F0D6;fontColor=#59B958;whiteSpace=wrap;align=left;verticalAlign=middle;spacing=20;',
  },
  _original_width: 800,
  _original_height: 210,
}

export function Alert9(props: DiagramNodeProps) {
  return <Shape {...ALERT_9} {...props} _style={extendStyle(ALERT_9, props)} />
}
