import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OVDC_NETWORKS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.ovdc_networks;',
  },
  _original_width: 50,
  _original_height: 30.5,
}

export function OvdcNetworks(props: DiagramNodeProps) {
  return (
    <Shape
      {...OVDC_NETWORKS}
      {...props}
      _style={extendStyle(OVDC_NETWORKS, props)}
    />
  )
}
