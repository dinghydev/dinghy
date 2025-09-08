import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTOMATION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.automation;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 78,
  _original_height: 81,
}

export function Automation(props: DiagramNodeProps) {
  return (
    <Shape {...AUTOMATION} {...props} _style={extendStyle(AUTOMATION, props)} />
  )
}
