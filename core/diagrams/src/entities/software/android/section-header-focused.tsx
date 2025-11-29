import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECTION_HEADER_FOCUSED = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#006699;strokeColor=#33B5E5;fontColor=#FFFFFF;',
  },
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderFocused(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SECTION_HEADER_FOCUSED)} />
  )
}
