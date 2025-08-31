import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_BLADE_6000_VIRTUALIZED_40_GBE_NETWORK_EXPRESS_MODULE = {
  _style:
    'shape=mxgraph.rack.oracle.sun_blade_6000_virtualized_40_gbe_network_express_module;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 19,
  _height: 121,
}

export function SunBlade6000Virtualized40GbeNetworkExpressModule(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SUN_BLADE_6000_VIRTUALIZED_40_GBE_NETWORK_EXPRESS_MODULE}
      {...props}
      _style={extendStyle(
        SUN_BLADE_6000_VIRTUALIZED_40_GBE_NETWORK_EXPRESS_MODULE,
        props,
      )}
    />
  )
}
