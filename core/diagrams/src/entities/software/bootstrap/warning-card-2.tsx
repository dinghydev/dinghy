import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WARNING_CARD_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#FFBC26;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#FFBC26;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _width: 0,
  _height: 180,
}

export function WarningCard2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WARNING_CARD_2)} />
}
