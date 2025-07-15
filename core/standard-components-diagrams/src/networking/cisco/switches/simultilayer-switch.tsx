import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SIMULTILAYER_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.simultilayer_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 58,
  _height: 58,
}

export function SimultilayerSwitch(props: DiagramNodeProps) {
  return <Shape {...SIMULTILAYER_SWITCH} {...props} />
}
