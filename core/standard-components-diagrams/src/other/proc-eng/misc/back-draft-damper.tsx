import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACK_DRAFT_DAMPER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.back_draft_damper2;',
  _width: 62,
  _height: 32,
}

export function BackDraftDamper(props: DiagramNodeProps) {
  return <Shape {...BACK_DRAFT_DAMPER} {...props} />
}
