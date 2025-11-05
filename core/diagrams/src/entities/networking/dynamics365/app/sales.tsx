import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SALES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Sales.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Sales(props: NodeProps) {
  return <Shape {...SALES} {...props} _style={extendStyle(SALES, props)} />
}
