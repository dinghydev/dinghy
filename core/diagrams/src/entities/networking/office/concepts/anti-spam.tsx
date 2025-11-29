import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANTI_SPAM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.anti_spam;',
  },
  _original_width: 55,
  _original_height: 47,
}

export function AntiSpam(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANTI_SPAM)} />
}
