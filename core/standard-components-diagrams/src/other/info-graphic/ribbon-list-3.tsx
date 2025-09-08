import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RIBBON_LIST_3 = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;shape=mxgraph.mscae.intune.user_group;fontSize=15;fontColor=#FFFFFF;align=left;',
  },
  _original_width: 2,
  _original_height: 590,
}

export function RibbonList3(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_LIST_3}
      {...props}
      _style={extendStyle(RIBBON_LIST_3, props)}
    />
  )
}
