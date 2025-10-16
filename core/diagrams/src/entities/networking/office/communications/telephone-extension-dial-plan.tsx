import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TELEPHONE_EXTENSION_DIAL_PLAN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.telephone_extension_dial_plan;',
  },
  _original_width: 55,
  _original_height: 56,
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
