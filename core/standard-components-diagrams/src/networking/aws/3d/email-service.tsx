import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.email_service;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 151,
  _height: 192,
}

export function EmailService(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMAIL_SERVICE}
      {...props}
      _style={extendStyle(EMAIL_SERVICE, props)}
    />
  )
}
