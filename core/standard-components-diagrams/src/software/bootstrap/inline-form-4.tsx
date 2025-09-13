import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INLINE_FORM_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#0085FC;strokeColor=none;align=center;spacing=15;fontSize=14;fontColor=#ffffff;',
  },
  _width: 3,
  _height: 30,
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
