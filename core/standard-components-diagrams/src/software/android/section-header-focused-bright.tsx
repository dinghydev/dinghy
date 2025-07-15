import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECTION_HEADER_FOCUSED_BRIGHT = {
  _style:
    'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#99e5ff;strokeColor=#33B5E5;fontColor=#4D4D4D;',
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderFocusedBright(props: DiagramNodeProps) {
  return <Shape {...SECTION_HEADER_FOCUSED_BRIGHT} {...props} />
}
