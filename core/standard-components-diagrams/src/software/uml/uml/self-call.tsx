import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SELF_CALL = {
  _style:
    'html=1;align=left;spacingLeft=2;endArrow=block;rounded=0;edgeStyle=orthogonalEdgeStyle;curved=0;rounded=0;',
  _width: 1,
  _height: 60,
}

export function SelfCall(props: DiagramNodeProps) {
  return (
    <Shape {...SELF_CALL} {...props} _style={extendStyle(SELF_CALL, props)} />
  )
}
