import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SELF_CALL = {
  _style: {
    entity:
      'html=1;align=left;spacingLeft=2;endArrow=block;rounded=0;edgeStyle=orthogonalEdgeStyle;curved=0;rounded=0;',
  },
  _original_width: 1,
  _original_height: 60,
}

export function SelfCall(props: DiagramNodeProps) {
  return (
    <Shape {...SELF_CALL} {...props} _style={extendStyle(SELF_CALL, props)} />
  )
}
