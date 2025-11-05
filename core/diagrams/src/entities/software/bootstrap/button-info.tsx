import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_INFO = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#1CA5B8;fontColor=#FFFFFF;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function ButtonInfo(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_INFO}
      {...props}
      _style={extendStyle(BUTTON_INFO, props)}
    />
  )
}
