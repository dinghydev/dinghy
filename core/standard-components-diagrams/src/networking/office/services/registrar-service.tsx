import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REGISTRAR_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.registrar_service;',
  },
  _width: 56,
  _height: 52,
}

export function RegistrarService(props: DiagramNodeProps) {
  return (
    <Shape
      {...REGISTRAR_SERVICE}
      {...props}
      _style={extendStyle(REGISTRAR_SERVICE, props)}
    />
  )
}
