import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HELP_TEXT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#E9ECEF;strokeColor=#CED4DA;align=left;spacing=15;fontSize=14;fontColor=#6C767D;',
  },
  _width: 1,
  _height: 240,
}

export function HelpText(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HELP_TEXT)} />
}
