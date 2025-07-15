import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOT_ALLOWED = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.not_allowed;fillColor=#EA1C24;',
  _width: 50,
  _height: 50,
}

export function NotAllowed(props: DiagramNodeProps) {
  return <Shape {...NOT_ALLOWED} {...props} />
}
