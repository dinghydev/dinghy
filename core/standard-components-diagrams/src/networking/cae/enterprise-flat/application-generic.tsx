import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_GENERIC = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.app_generic',
  _width: 50,
  _height: 39,
}

export function ApplicationGeneric(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_GENERIC} {...props} />
}
