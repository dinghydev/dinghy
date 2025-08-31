import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLR_HELPER_APPLIANCE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.flr_helper_appliance;',
  _width: 49.6,
  _height: 50,
}

export function FlrHelperAppliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLR_HELPER_APPLIANCE}
      {...props}
      _style={extendStyle(FLR_HELPER_APPLIANCE, props)}
    />
  )
}
