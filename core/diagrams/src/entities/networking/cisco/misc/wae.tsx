import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WAE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.wae;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 64,
}

export function Wae(props: DiagramNodeProps) {
  return <Shape {...WAE} {...props} _style={extendStyle(WAE, props)} />
}
