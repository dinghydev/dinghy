import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_SUCCESS = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#33A64C;fontColor=#FFFFFF;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _original_width: 90,
  _original_height: 40,
}

export function ButtonSuccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_SUCCESS}
      {...props}
      _style={extendStyle(BUTTON_SUCCESS, props)}
    />
  )
}
