import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_WEB = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.application_web;',
  _width: 56,
  _height: 49,
}

export function ApplicationWeb(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_WEB}
      {...props}
      _style={extendStyle(APPLICATION_WEB, props)}
    />
  )
}
