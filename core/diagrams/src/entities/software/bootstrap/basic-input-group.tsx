import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BASIC_INPUT_GROUP = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#CED4DA;html=1;whiteSpace=wrap;fillColor=#FFFFFF;fontColor=#7D868C;align=left;spacing=15;spacingLeft=40;fontSize=14;',
  },
  _width: 0,
  _height: 330,
}

export function BasicInputGroup(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BASIC_INPUT_GROUP)} />
}
