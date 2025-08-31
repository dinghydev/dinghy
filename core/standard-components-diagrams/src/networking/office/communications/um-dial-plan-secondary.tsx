import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UM_DIAL_PLAN_SECONDARY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.um_dial_plan_secondary;',
  },
  _width: 55,
  _height: 56,
}

export function UmDialPlanSecondary(props: DiagramNodeProps) {
  return (
    <Shape
      {...UM_DIAL_PLAN_SECONDARY}
      {...props}
      _style={extendStyle(UM_DIAL_PLAN_SECONDARY, props)}
    />
  )
}
