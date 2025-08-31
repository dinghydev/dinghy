import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECTION_HEADER_NORMAL = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#1A1A1A;strokeColor=#1A1A1A;fontColor=#FFFFFF;',
  },
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderNormal(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECTION_HEADER_NORMAL}
      {...props}
      _style={extendStyle(SECTION_HEADER_NORMAL, props)}
    />
  )
}
