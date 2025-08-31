import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_BLADE_6000_ETHERNET_NETWORK_EXPRESS_MODULE_24P_10_GBE = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_blade_6000_ethernet_network_express_module_24p_10_gbe;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function SunBlade6000EthernetNetworkExpressModule24p10Gbe(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SUN_BLADE_6000_ETHERNET_NETWORK_EXPRESS_MODULE_24P_10_GBE}
      {...props}
      _style={extendStyle(
        SUN_BLADE_6000_ETHERNET_NETWORK_EXPRESS_MODULE_24P_10_GBE,
        props,
      )}
    />
  )
}
