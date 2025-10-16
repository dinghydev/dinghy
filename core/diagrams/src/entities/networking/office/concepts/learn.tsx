import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LEARN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.learn;',
  },
  _original_width: 56,
  _original_height: 57,
}

export function Learn(props: DiagramNodeProps) {
  return <Shape {...LEARN} {...props} _style={extendStyle(LEARN, props)} />
}
