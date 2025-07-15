import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const J9772A_2530_48G_POE_SWITCH = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9772a_2530_48g_poeplus_switch;',
  _width: 142,
  _height: 15,
}

export function J9772a253048gPoeSwitch(props: DiagramNodeProps) {
  return <Shape {...J9772A_2530_48G_POE_SWITCH} {...props} />
}
