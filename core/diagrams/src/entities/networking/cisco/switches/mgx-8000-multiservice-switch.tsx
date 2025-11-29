import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MGX_8000_MULTISERVICE_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.mgx_8000_multiservice_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Mgx8000MultiserviceSwitch(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MGX_8000_MULTISERVICE_SWITCH)}
    />
  )
}
