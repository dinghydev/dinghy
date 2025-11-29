import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OVDC_NETWORKS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.ovdc_networks;',
  },
  _width: 50,
  _height: 30.5,
}

export function OvdcNetworks(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OVDC_NETWORKS)} />
}
