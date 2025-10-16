import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.adm;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 78,
  _height: 51,
}

export function Adm(props: DiagramNodeProps) {
  return <Shape {...ADM} {...props} _style={extendStyle(ADM, props)} />
}
