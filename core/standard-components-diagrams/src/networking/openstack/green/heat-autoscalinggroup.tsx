import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEAT_AUTOSCALINGGROUP = {
  _style: {
    entity:
      'fillColor=#008000;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.heat_autoscalinggroup;',
  },
  _width: 60,
  _height: 60,
}

export function HeatAutoscalinggroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEAT_AUTOSCALINGGROUP}
      {...props}
      _style={extendStyle(HEAT_AUTOSCALINGGROUP, props)}
    />
  )
}
