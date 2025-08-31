import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOKEN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.token;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 59,
  _height: 61,
}

export function Token(props: DiagramNodeProps) {
  return <Shape {...TOKEN} {...props} _style={extendStyle(TOKEN, props)} />
}
