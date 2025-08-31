import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEBEX = {
  _style: {
    entity:
      'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.webex',
  },
  _width: 60,
  _height: 60,
}

export function Webex(props: DiagramNodeProps) {
  return <Shape {...WEBEX} {...props} _style={extendStyle(WEBEX, props)} />
}
