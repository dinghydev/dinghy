import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECTION_HEADER_DISABLED_BRIGHT = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#FFFFFF;strokeColor=#FFFFFF;fontColor=#B3B3B3;',
  },
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderDisabledBright(props: NodeProps) {
  return (
    <Shape
      {...SECTION_HEADER_DISABLED_BRIGHT}
      {...props}
      _style={extendStyle(SECTION_HEADER_DISABLED_BRIGHT, props)}
    />
  )
}
