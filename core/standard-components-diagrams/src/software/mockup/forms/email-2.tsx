import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EMAIL_2 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.rrect;fillColor=#ffffff;rSize=0;fontColor=#666666;align=left;spacingLeft=3;strokeColor=#999999;',
  },
  _original_width: 1,
  _original_height: 300,
}

export function Email2(props: DiagramNodeProps) {
  return <Shape {...EMAIL_2} {...props} _style={extendStyle(EMAIL_2, props)} />
}
