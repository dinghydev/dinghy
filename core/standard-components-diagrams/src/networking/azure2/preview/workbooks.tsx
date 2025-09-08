import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKBOOKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Azure_Workbooks.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 72,
}

export function Workbooks(props: DiagramNodeProps) {
  return (
    <Shape {...WORKBOOKS} {...props} _style={extendStyle(WORKBOOKS, props)} />
  )
}
