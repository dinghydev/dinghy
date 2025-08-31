import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_ON_DARK = {
  _style:
    'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.switch;aspect=fixed;switchState=on;strokeColor=none;fillColor=#80CBC4;sketch=0;html=1;',
  _width: 0,
  _height: 20,
}

export function SwitchOnDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_ON_DARK}
      {...props}
      _style={extendStyle(SWITCH_ON_DARK, props)}
    />
  )
}
