import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_FORM_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#0085FC;strokeColor=none;align=center;spacing=15;fontSize=14;fontColor=#ffffff;',
  },
  _original_width: 3,
  _original_height: 30,
}

export function InlineForm4(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_FORM_4}
      {...props}
      _style={extendStyle(INLINE_FORM_4, props)}
    />
  )
}
