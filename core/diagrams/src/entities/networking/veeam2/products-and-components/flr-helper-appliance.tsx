import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLR_HELPER_APPLIANCE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.flr_helper_appliance;',
  },
  _original_width: 21,
  _original_height: 21,
}

export function FlrHelperAppliance(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLR_HELPER_APPLIANCE)} />
}
