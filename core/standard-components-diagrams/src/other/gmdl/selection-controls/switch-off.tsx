import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_OFF = {
  _style:
    'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.switch;aspect=fixed;switchState=off;strokeColor=none;fillColor=#0E9D57;sketch=0;html=1;',
  _width: 0,
  _height: 20,
}

export function SwitchOff(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCH_OFF} {...props} _style={extendStyle(SWITCH_OFF, props)} />
  )
}
