import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION_ITEM = {
  _style: 'align=left;spacingLeft=10;html=1;dashed=0;whiteSpace=wrap;',
  _width: 0,
  _height: 50,
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
