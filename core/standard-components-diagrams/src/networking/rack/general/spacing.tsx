import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPACING = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;text;',
  _width: 160,
  _height: 15,
}

export function Spacing(props: DiagramNodeProps) {
  return <Shape {...SPACING} {...props} _style={extendStyle(SPACING, props)} />
}
