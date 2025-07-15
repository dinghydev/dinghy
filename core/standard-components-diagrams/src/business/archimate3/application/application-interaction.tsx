import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_INTERACTION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=interaction;archiType=rounded;',
  _width: 150,
  _height: 75,
}

export function ApplicationInteraction(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_INTERACTION} {...props} />
}
