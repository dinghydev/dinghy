import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SORT_FIND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iSortFindIcon;fillColor=#8BbEff;fillColor2=#135Ec8;strokeColor=#ffffff;sketch=0;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function SortFind(props: NodeProps) {
  return (
    <Shape {...SORT_FIND} {...props} _style={extendStyle(SORT_FIND, props)} />
  )
}
