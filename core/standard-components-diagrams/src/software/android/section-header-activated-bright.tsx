import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECTION_HEADER_ACTIVATED_BRIGHT = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#33b5e5;strokeColor=#33B5E5;fontColor=#4D4D4D;',
  },
  _original_width: 168.8,
  _original_height: 16.88,
}

export function SectionHeaderActivatedBright(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECTION_HEADER_ACTIVATED_BRIGHT}
      {...props}
      _style={extendStyle(SECTION_HEADER_ACTIVATED_BRIGHT, props)}
    />
  )
}
