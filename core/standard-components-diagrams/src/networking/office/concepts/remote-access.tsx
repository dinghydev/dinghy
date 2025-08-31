import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOTE_ACCESS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.remote_access;',
  },
  _width: 59,
  _height: 41,
}

export function RemoteAccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_ACCESS}
      {...props}
      _style={extendStyle(REMOTE_ACCESS, props)}
    />
  )
}
