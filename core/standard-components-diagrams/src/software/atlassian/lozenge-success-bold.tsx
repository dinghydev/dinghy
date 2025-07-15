import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOZENGE_SUCCESS_BOLD = {
  _style:
    'dashed=0;html=1;rounded=1;fillColor=#008364;strokeColor=#008364;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#ffffff',
  _width: 70,
  _height: 20,
}

export function LozengeSuccessBold(props: DiagramNodeProps) {
  return <Shape {...LOZENGE_SUCCESS_BOLD} {...props} />
}
