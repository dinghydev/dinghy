import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_FOLDER = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.shared_folder',
  _width: 43,
  _height: 50,
}

export function SharedFolder(props: DiagramNodeProps) {
  return <Shape {...SHARED_FOLDER} {...props} />
}
