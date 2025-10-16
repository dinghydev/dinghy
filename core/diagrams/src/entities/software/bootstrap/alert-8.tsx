import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALERT_8 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#C6C8CA;strokeWidth=1;fillColor=#D6D8D9;fontColor=#1B1E21;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  },
  _width: 800,
  _height: 40,
}

export function Alert8(props: DiagramNodeProps) {
  return <Shape {...ALERT_8} {...props} _style={extendStyle(ALERT_8, props)} />
}
