import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_DANGER = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#DB2843;fontColor=#FFFFFF;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _width: 80,
  _height: 40,
}

export function ButtonDanger(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_DANGER}
      {...props}
      _style={extendStyle(BUTTON_DANGER, props)}
    />
  )
}
