import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CSU_DSU = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.csu_dsu;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 102,
  _height: 45,
}

export function CsuDsu(props: DiagramNodeProps) {
  return <Shape {...CSU_DSU} {...props} _style={extendStyle(CSU_DSU, props)} />
}
