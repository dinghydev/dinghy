import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COPY = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iCopy;fillColor=#000000;buttonText=;fontColor=#ffffff;spacingBottom=6;fontSize=9;fillColor2=#000000;fillColor3=#ffffff;align=center;sketch=0;whiteSpace=wrap;',
  _width: 40,
  _height: 27.500000000000004,
}

export function Copy(props: DiagramNodeProps) {
  return <Shape {...COPY} {...props} />
}
