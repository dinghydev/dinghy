import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_FORM_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#ffffff;strokeColor=#999999;align=left;spacingLeft=50;fontSize=14;fontColor=#6C767D;',
  },
  _width: 1,
  _height: 30,
}

export function InlineForm2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_FORM_2}
      {...props}
      _style={extendStyle(INLINE_FORM_2, props)}
    />
  )
}
