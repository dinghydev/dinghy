import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIREMENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=requirement;archiType=oct;',
  _width: 150,
  _height: 75,
}

export function Requirement(props: DiagramNodeProps) {
  return <Shape {...REQUIREMENT} {...props} />
}
