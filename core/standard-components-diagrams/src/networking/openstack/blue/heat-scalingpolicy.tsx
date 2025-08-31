import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEAT_SCALINGPOLICY = {
  _style:
    'fillColor=#3F51B5;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.heat_scalingpolicy;',
  _width: 60,
  _height: 60,
}

export function HeatScalingpolicy(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEAT_SCALINGPOLICY}
      {...props}
      _style={extendStyle(HEAT_SCALINGPOLICY, props)}
    />
  )
}
