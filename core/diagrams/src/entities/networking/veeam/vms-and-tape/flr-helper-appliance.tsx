import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLR_HELPER_APPLIANCE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.flr_helper_appliance;',
  },
  _original_width: 49.6,
  _original_height: 50,
}

export function FlrHelperAppliance(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLR_HELPER_APPLIANCE)} />
}
