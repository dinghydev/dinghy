import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALERT_7 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#FDFDFE;strokeWidth=1;fillColor=#FEFEFE;fontColor=#818182;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  },
  _width: 800,
  _height: 40,
}

export function Alert7(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ALERT_7)} />
}
