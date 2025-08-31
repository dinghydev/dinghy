import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.anchor;align=right;spacingRight=2;fontColor=#666666;',
  },
  _width: 400,
  _height: 300,
}

export function Email(props: DiagramNodeProps) {
  return <Shape {...EMAIL} {...props} _style={extendStyle(EMAIL, props)} />
}
