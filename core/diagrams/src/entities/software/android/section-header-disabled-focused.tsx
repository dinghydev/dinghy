import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECTION_HEADER_DISABLED_FOCUSED = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#006699;strokeColor=#33B5E5;fontColor=#B3B3B3;',
  },
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderDisabledFocused(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECTION_HEADER_DISABLED_FOCUSED}
      {...props}
      _style={extendStyle(SECTION_HEADER_DISABLED_FOCUSED, props)}
    />
  )
}
