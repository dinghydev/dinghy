import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_FOLDER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.shared_folder;',
  _width: 28.000000000000004,
  _height: 24,
}

export function SharedFolder(props: DiagramNodeProps) {
  return <Shape {...SHARED_FOLDER} {...props} />
}
