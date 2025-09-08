import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEB_BROWSER_CONTAINER = {
  _style: {
    entity:
      'shape=mxgraph.c4.webBrowserContainer2;whiteSpace=wrap;html=1;boundedLbl=1;rounded=0;labelBackgroundColor=none;strokeColor=#118ACD;fillColor=#23A2D9;strokeColor=#118ACD;strokeColor2=#0E7DAD;fontSize=12;fontColor=#ffffff;align=center;metaEdit=1;points=[[0.5,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.5,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];resizable=0;',
  },
  _original_width: 0,
  _original_height: 160,
}

export function WebBrowserContainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_BROWSER_CONTAINER}
      {...props}
      _style={extendStyle(WEB_BROWSER_CONTAINER, props)}
    />
  )
}
