import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECTION_HEADER_NORMAL = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#1A1A1A;strokeColor=#1A1A1A;fontColor=#FFFFFF;',
  },
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderNormal(props: NodeProps) {
  return (
    <Shape
      {...SECTION_HEADER_NORMAL}
      {...props}
      _style={extendStyle(SECTION_HEADER_NORMAL, props)}
    />
  )
}
