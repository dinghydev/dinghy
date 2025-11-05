import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACK_DRAFT_DAMPER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.back_draft_damper2;',
  },
  _width: 62,
  _height: 32,
}

export function BackDraftDamper(props: NodeProps) {
  return (
    <Shape
      {...BACK_DRAFT_DAMPER}
      {...props}
      _style={extendStyle(BACK_DRAFT_DAMPER, props)}
    />
  )
}
