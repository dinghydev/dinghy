import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_SERVER = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.application_server',
  },
  _original_width: 43,
  _original_height: 50,
}

export function ApplicationServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_SERVER}
      {...props}
      _style={extendStyle(APPLICATION_SERVER, props)}
    />
  )
}
