import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECTION_HEADER_PRESSED_BRIGHT = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#f6f6f6;strokeColor=#f6f6f6;fontColor=#4D4D4D;',
  },
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderPressedBright(props: NodeProps) {
  return (
    <Shape
      {...SECTION_HEADER_PRESSED_BRIGHT}
      {...props}
      _style={extendStyle(SECTION_HEADER_PRESSED_BRIGHT, props)}
    />
  )
}
