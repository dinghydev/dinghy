import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTRY_POINT = {
  _style:
    'ellipse;html=1;labelPosition=left;verticalLabelPosition=bottom;spacingBottom=10;align=right;verticalAlign=bottom;resizable=0;',
  _width: 20,
  _height: 20,
}

export function EntryPoint(props: DiagramNodeProps) {
  return <Shape {...ENTRY_POINT} {...props} />
}
