import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUN_BLADE_X6270_M2_SERVER_MODULE = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_blade_x6270_m2_server_module;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function SunBladeX6270M2ServerModule(props: NodeProps) {
  return (
    <Shape
      {...SUN_BLADE_X6270_M2_SERVER_MODULE}
      {...props}
      _style={extendStyle(SUN_BLADE_X6270_M2_SERVER_MODULE, props)}
    />
  )
}
