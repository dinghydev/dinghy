import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERAL_APPLIANCE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.general_appliance;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 58,
}

export function GeneralAppliance(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GENERAL_APPLIANCE)} />
}
