import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKGROUP_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.workgroup_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 101,
  _original_height: 50,
}

export function WorkgroupSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKGROUP_SWITCH}
      {...props}
      _style={extendStyle(WORKGROUP_SWITCH, props)}
    />
  )
}
