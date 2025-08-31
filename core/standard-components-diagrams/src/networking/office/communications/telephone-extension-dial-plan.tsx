import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TELEPHONE_EXTENSION_DIAL_PLAN = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.telephone_extension_dial_plan;',
  _width: 55,
  _height: 56,
}

export function TelephoneExtensionDialPlan(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELEPHONE_EXTENSION_DIAL_PLAN}
      {...props}
      _style={extendStyle(TELEPHONE_EXTENSION_DIAL_PLAN, props)}
    />
  )
}
