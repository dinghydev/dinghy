import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IRM_PROTECTED_MESSAGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.irm_protected_message;',
  _width: 56,
  _height: 50,
}

export function IrmProtectedMessage(props: DiagramNodeProps) {
  return (
    <Shape
      {...IRM_PROTECTED_MESSAGE}
      {...props}
      _style={extendStyle(IRM_PROTECTED_MESSAGE, props)}
    />
  )
}
