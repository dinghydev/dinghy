import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const READONLY_PLAIN_TEXT_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;fillColor=#0085FC;fontColor=#ffffff;whiteSpace=wrap;align=center;verticalAlign=middle;fontStyle=0;fontSize=14;spacing=14;',
  },
  _width: 2,
  _height: 40,
}

export function ReadonlyPlainText4(props: NodeProps) {
  return (
    <Shape
      {...READONLY_PLAIN_TEXT_4}
      {...props}
      _style={extendStyle(READONLY_PLAIN_TEXT_4, props)}
    />
  )
}
