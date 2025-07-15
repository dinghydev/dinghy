import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLR_HELPER_APPLIANCE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.flr_helper_appliance;',
  _width: 21,
  _height: 21,
}

export function FlrHelperAppliance(props: DiagramNodeProps) {
  return <Shape {...FLR_HELPER_APPLIANCE} {...props} />
}
