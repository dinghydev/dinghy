import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION_ITEM = {
  _style: {
    entity: 'align=left;spacingLeft=10;html=1;dashed=0;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 50,
}

export function InformationItem(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION_ITEM}
      {...props}
      _style={extendStyle(INFORMATION_ITEM, props)}
    />
  )
}
