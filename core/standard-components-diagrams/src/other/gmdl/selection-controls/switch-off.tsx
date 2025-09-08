import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_OFF = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.switch;aspect=fixed;switchState=off;strokeColor=none;fillColor=#0E9D57;sketch=0;html=1;',
  },
  _original_width: 0,
  _original_height: 20,
}

export function SwitchOff(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCH_OFF} {...props} _style={extendStyle(SWITCH_OFF, props)} />
  )
}
