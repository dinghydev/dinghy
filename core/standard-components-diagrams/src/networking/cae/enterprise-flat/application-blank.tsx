import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_BLANK = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.application_blank',
  },
  _width: 50,
  _height: 43,
}

export function ApplicationBlank(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_BLANK}
      {...props}
      _style={extendStyle(APPLICATION_BLANK, props)}
    />
  )
}
