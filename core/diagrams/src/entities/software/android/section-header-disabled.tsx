import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECTION_HEADER_DISABLED = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#1A1A1A;strokeColor=#1A1A1A;fontColor=#B3B3B3;',
  },
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderDisabled(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SECTION_HEADER_DISABLED)} />
  )
}
