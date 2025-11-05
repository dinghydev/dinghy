import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DROPLEFT_BUTTON = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#6C767D;fontColor=#ffffff;whiteSpace=wrap;align=right;verticalAlign=middle;fontStyle=0;fontSize=14;spacingRight=10;',
  },
  _width: 0,
  _height: 40,
}

export function DropleftButton(props: NodeProps) {
  return (
    <Shape
      {...DROPLEFT_BUTTON}
      {...props}
      _style={extendStyle(DROPLEFT_BUTTON, props)}
    />
  )
}
