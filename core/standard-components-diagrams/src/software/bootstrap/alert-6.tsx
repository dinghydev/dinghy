import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALERT_6 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#BFE6EB;strokeWidth=1;fillColor=#D1EDF1;fontColor=#0E5560;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  },
  _original_width: 800,
  _original_height: 40,
}

export function Alert6(props: DiagramNodeProps) {
  return <Shape {...ALERT_6} {...props} _style={extendStyle(ALERT_6, props)} />
}
