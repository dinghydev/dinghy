import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIBRANCH_GENERALIZATION = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endSize=12;endArrow=block;endFill=0;elbow=horizontal;rounded=0;labelBackgroundColor=default;fontFamily=Helvetica;fontSize=11;fontColor=default;shape=connector;',
  _width: 1,
  _height: 50,
}

export function MultibranchGeneralization(props: DiagramNodeProps) {
  return <Shape {...MULTIBRANCH_GENERALIZATION} {...props} />
}
