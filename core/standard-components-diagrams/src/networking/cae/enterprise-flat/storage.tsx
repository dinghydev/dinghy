import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.storage',
  _width: 50,
  _height: 41,
}

export function Storage(props: DiagramNodeProps) {
  return <Shape {...STORAGE} {...props} />
}
