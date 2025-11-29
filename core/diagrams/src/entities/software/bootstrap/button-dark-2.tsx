import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_DARK_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#343A40;strokeWidth=1;fillColor=none;fontColor=#343A40;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _width: 60,
  _height: 40,
}

export function ButtonDark2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_DARK_2)} />
}
