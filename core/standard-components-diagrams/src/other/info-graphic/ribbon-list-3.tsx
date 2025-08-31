import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RIBBON_LIST_3 = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;shape=mxgraph.mscae.intune.user_group;fontSize=15;fontColor=#FFFFFF;align=left;',
  },
  _width: 2,
  _height: 590,
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
