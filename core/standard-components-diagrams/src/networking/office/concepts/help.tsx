import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HELP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.help;',
  },
  _original_width: 49,
  _original_height: 49,
}

export function Help(props: DiagramNodeProps) {
  return <Shape {...HELP} {...props} _style={extendStyle(HELP, props)} />
}
