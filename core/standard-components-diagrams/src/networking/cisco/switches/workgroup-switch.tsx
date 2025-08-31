import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKGROUP_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.workgroup_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 101,
  _height: 50,
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
