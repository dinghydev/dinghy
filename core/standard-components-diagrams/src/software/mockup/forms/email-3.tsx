import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EMAIL_3 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.rrect;fillColor=#ffffff;rSize=0;fontColor=#666666;align=left;spacingLeft=3;strokeColor=#999999;verticalAlign=top;whiteSpace=wrap;',
  },
  _original_width: 10,
  _original_height: 300,
}

export function Email3(props: DiagramNodeProps) {
  return <Shape {...EMAIL_3} {...props} _style={extendStyle(EMAIL_3, props)} />
}
