import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_SUCCESS_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#33A64C;strokeWidth=1;fillColor=none;fontColor=#33A64C;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _width: 90,
  _height: 40,
}

export function ButtonSuccess2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_SUCCESS_2)} />
}
