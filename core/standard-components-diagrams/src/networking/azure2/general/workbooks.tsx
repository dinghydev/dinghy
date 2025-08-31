import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKBOOKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Workbooks.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 65,
}

export function Workbooks(props: DiagramNodeProps) {
  return (
    <Shape {...WORKBOOKS} {...props} _style={extendStyle(WORKBOOKS, props)} />
  )
}
