import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INLINE_FORM_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#0085FC;strokeColor=none;align=center;spacing=15;fontSize=14;fontColor=#ffffff;sketch=0;',
  },
  _width: 2,
  _height: 30,
}

export function InlineForm5(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_FORM_5}
      {...props}
      _style={extendStyle(INLINE_FORM_5, props)}
    />
  )
}
