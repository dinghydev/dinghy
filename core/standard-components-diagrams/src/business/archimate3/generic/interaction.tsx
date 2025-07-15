import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERACTION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=interaction;archiType=rounded;',
  _width: 150,
  _height: 75,
}

export function Interaction(props: DiagramNodeProps) {
  return <Shape {...INTERACTION} {...props} />
}
