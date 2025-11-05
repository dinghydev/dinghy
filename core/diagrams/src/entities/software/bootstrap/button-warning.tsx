import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_WARNING = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#FFBC26;fontColor=#FFFFFF;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _width: 90,
  _height: 40,
}

export function ButtonWarning(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_WARNING}
      {...props}
      _style={extendStyle(BUTTON_WARNING, props)}
    />
  )
}
