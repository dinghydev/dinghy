import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORD_AUTOMATION_SERVICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.word_automation_services;',
  },
  _original_width: 60,
  _original_height: 49,
}

export function WordAutomationServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORD_AUTOMATION_SERVICES}
      {...props}
      _style={extendStyle(WORD_AUTOMATION_SERVICES, props)}
    />
  )
}
