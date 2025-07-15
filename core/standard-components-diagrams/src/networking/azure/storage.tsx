import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storage;pointerEvents=1;',
  _width: 50,
  _height: 40,
}

export function Storage(props: DiagramNodeProps) {
  return <Shape {...STORAGE} {...props} />
}
