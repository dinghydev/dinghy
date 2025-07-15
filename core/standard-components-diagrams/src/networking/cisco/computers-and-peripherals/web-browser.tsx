import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_BROWSER = {
  _style:
    'shape=mxgraph.cisco.computers_and_peripherals.web_browser;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 62,
  _height: 64,
}

export function WebBrowser(props: DiagramNodeProps) {
  return <Shape {...WEB_BROWSER} {...props} />
}
