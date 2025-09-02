import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_ON_DARK = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.switch;aspect=fixed;switchState=on;strokeColor=none;fillColor=#80CBC4;sketch=0;html=1;',
  },
  _original_width: 0,
  _original_height: 20,
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
