import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GSLB = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.gslb;',
  },
  _width: 104,
  _height: 50,
}

export function Gslb(props: DiagramNodeProps) {
  return <Shape {...GSLB} {...props} _style={extendStyle(GSLB, props)} />
}
