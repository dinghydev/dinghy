import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SORT_FIND = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iSortFindIcon;fillColor=#8BbEff;fillColor2=#135Ec8;strokeColor=#ffffff;sketch=0;',
  _width: 15,
  _height: 15,
}

export function SortFind(props: DiagramNodeProps) {
  return (
    <Shape {...SORT_FIND} {...props} _style={extendStyle(SORT_FIND, props)} />
  )
}
