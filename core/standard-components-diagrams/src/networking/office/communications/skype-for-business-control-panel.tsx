import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SKYPE_FOR_BUSINESS_CONTROL_PANEL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.skype_for_business_control_panel;',
  },
  _width: 65,
  _height: 59,
}

export function SkypeForBusinessControlPanel(props: DiagramNodeProps) {
  return (
    <Shape
      {...SKYPE_FOR_BUSINESS_CONTROL_PANEL}
      {...props}
      _style={extendStyle(SKYPE_FOR_BUSINESS_CONTROL_PANEL, props)}
    />
  )
}
