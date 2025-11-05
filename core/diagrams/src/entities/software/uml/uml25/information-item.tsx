import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INFORMATION_ITEM = {
  _style: {
    entity: 'align=left;spacingLeft=10;html=1;dashed=0;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 50,
}

export function InformationItem(props: NodeProps) {
  return (
    <Shape
      {...INFORMATION_ITEM}
      {...props}
      _style={extendStyle(INFORMATION_ITEM, props)}
    />
  )
}
