import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REGISTRAR_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.registrar_service;',
  },
  _original_width: 56,
  _original_height: 52,
}

export function RegistrarService(props: NodeProps) {
  return (
    <Shape
      {...REGISTRAR_SERVICE}
      {...props}
      _style={extendStyle(REGISTRAR_SERVICE, props)}
    />
  )
}
