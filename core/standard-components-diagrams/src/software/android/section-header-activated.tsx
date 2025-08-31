import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECTION_HEADER_ACTIVATED = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#33b5e5;strokeColor=#33B5E5;fontColor=#FFFFFF;',
  },
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderActivated(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECTION_HEADER_ACTIVATED}
      {...props}
      _style={extendStyle(SECTION_HEADER_ACTIVATED, props)}
    />
  )
}
