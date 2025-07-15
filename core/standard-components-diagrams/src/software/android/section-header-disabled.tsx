import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECTION_HEADER_DISABLED = {
  _style:
    'whiteSpace=wrap;html=1;shadow=0;dashed=0;fontSize=10;align=left;fillColor=#1A1A1A;strokeColor=#1A1A1A;fontColor=#B3B3B3;',
  _width: 168.8,
  _height: 16.88,
}

export function SectionHeaderDisabled(props: DiagramNodeProps) {
  return <Shape {...SECTION_HEADER_DISABLED} {...props} />
}
