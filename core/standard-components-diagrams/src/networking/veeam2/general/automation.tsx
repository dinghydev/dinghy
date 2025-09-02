import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTOMATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.automation;',
  },
  _original_width: 28.000000000000004,
  _original_height: 28.000000000000004,
}

export function Automation(props: DiagramNodeProps) {
  return (
    <Shape {...AUTOMATION} {...props} _style={extendStyle(AUTOMATION, props)} />
  )
}
