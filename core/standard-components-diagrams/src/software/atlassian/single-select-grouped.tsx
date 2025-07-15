import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_SELECT_GROUPED = {
  _style:
    'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#596780;whiteSpace=wrap',
  _width: 360,
  _height: 260,
}

export function SingleSelectGrouped(props: DiagramNodeProps) {
  return <Shape {...SINGLE_SELECT_GROUPED} {...props} />
}
