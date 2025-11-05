import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PBX_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.pbx_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 58,
  _original_height: 53,
}

export function PbxSwitch(props: NodeProps) {
  return (
    <Shape {...PBX_SWITCH} {...props} _style={extendStyle(PBX_SWITCH, props)} />
  )
}
