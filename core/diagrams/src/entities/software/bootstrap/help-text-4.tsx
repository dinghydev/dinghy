import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HELP_TEXT_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#ffffff;strokeColor=#CED4DA;align=left;spacingLeft=50;fontSize=14;fontColor=#6C767D;',
  },
  _width: 5,
  _height: 240,
}

export function HelpText4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HELP_TEXT_4)} />
}
