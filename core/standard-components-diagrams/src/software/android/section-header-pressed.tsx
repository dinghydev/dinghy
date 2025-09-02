import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECTION_HEADER_PRESSED = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#4D4D4D;strokeColor=#4D4D4D;fontColor=#FFFFFF;',
  },
  _original_width: 168.8,
  _original_height: 16.88,
}

export function SectionHeaderPressed(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECTION_HEADER_PRESSED}
      {...props}
      _style={extendStyle(SECTION_HEADER_PRESSED, props)}
    />
  )
}
