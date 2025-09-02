import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACK_DRAFT_DAMPER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.back_draft_damper2;',
  },
  _original_width: 62,
  _original_height: 32,
}

export function BackDraftDamper(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACK_DRAFT_DAMPER}
      {...props}
      _style={extendStyle(BACK_DRAFT_DAMPER, props)}
    />
  )
}
