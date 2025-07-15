import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOTIVATION_ELEMENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=generic;archiType=oct;',
  _width: 150,
  _height: 75,
}

export function MotivationElement(props: DiagramNodeProps) {
  return <Shape {...MOTIVATION_ELEMENT} {...props} />
}
