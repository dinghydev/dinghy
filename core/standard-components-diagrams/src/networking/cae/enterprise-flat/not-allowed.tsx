import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOT_ALLOWED = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.not_allowed;fillColor=#EA1C24;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function NotAllowed(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOT_ALLOWED}
      {...props}
      _style={extendStyle(NOT_ALLOWED, props)}
    />
  )
}
