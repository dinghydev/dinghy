import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEAT_SCALINGPOLICY = {
  _style:
    'fillColor=#808080;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.heat_scalingpolicy;',
  _width: 50,
  _height: 50,
}

export function HeatScalingpolicy(props: DiagramNodeProps) {
  return <Shape {...HEAT_SCALINGPOLICY} {...props} />
}
