import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKBOOKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Workbooks.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 65,
}

export function Workbooks(props: NodeProps) {
  return (
    <Shape {...WORKBOOKS} {...props} _style={extendStyle(WORKBOOKS, props)} />
  )
}
