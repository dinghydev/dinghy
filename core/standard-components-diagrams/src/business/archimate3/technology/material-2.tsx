import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MATERIAL_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.material;',
  _width: 60,
  _height: 50,
}

export function Material2(props: DiagramNodeProps) {
  return <Shape {...MATERIAL_2} {...props} />
}
