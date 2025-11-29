import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWITCH_ON_DARK = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.switch;aspect=fixed;switchState=on;strokeColor=none;fillColor=#80CBC4;sketch=0;html=1;',
  },
  _width: 0,
  _height: 20,
}

export function SwitchOnDark(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWITCH_ON_DARK)} />
}
