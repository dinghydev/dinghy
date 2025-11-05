import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_DANGER_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DB2843;strokeWidth=1;fillColor=none;fontColor=#DB2843;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _width: 80,
  _height: 40,
}

export function ButtonDanger2(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_DANGER_2}
      {...props}
      _style={extendStyle(BUTTON_DANGER_2, props)}
    />
  )
}
