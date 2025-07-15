import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_TESTING = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.load_testing',
  _width: 48,
  _height: 50,
}

export function LoadTesting(props: DiagramNodeProps) {
  return <Shape {...LOAD_TESTING} {...props} />
}
